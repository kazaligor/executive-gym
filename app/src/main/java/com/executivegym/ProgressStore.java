package com.executivegym;

import android.content.Context;
import android.content.SharedPreferences;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

public class ProgressStore {
    private final SharedPreferences p;
    public ProgressStore(Context c){ p=c.getSharedPreferences("progress",Context.MODE_PRIVATE); }

    public int xp(){return p.getInt("xp",0);}
    public int level(){return xp()/100+1;}
    public int score(String skill){return p.getInt(skillKey(skill),50);}
    public int totalCorrect(){return p.getInt("correct",0);}
    public int totalAnswered(){return p.getInt("answered",0);}
    public int streak(){return p.getInt("streak",0);}
    public boolean completedToday(){return LocalDate.now().toString().equals(p.getString("lastDay",""));}

    private String skillKey(String s){
        if(s.startsWith("Стратег")) return "strategy";
        if(s.startsWith("Решен")) return "decision";
        if(s.startsWith("Лидер")) return "leadership";
        if(s.startsWith("Бизнес")) return "business";
        if(s.startsWith("Коммун")) return "communication";
        return "effectiveness";
    }

    public int wrongCount(String skill){return p.getInt(skillKey(skill)+"_wrong",0);}

    public void answer(String skill, boolean correct){
        String k=skillKey(skill);
        int old=score(skill);
        int next=Math.max(0,Math.min(100,old+(correct?4:-3)));
        SharedPreferences.Editor e=p.edit()
            .putInt(k,next)
            .putInt("xp",xp()+(correct?12:4))
            .putInt("answered",totalAnswered()+1);
        if(correct)e.putInt("correct",totalCorrect()+1);
        else e.putInt(k+"_wrong",wrongCount(skill)+1);
        e.apply();
    }

    public void completeDay(){
        String today=LocalDate.now().toString(), last=p.getString("lastDay","");
        if(today.equals(last)) return;
        int s=p.getInt("streak",0);
        if(last.isEmpty()) s=1;
        else {
            long days=ChronoUnit.DAYS.between(LocalDate.parse(last),LocalDate.now());
            s=(days==1)?s+1:1;
        }
        p.edit().putString("lastDay",today).putInt("streak",s).apply();
    }
}
