package com.executivegym;

import android.app.Activity;
import android.os.Bundle;
import android.graphics.Color;
import android.graphics.Typeface;
import android.view.*;
import android.widget.*;
import android.graphics.drawable.GradientDrawable;
import java.util.*;

public class MainActivity extends Activity {
    ProgressStore store;
    LinearLayout root, body;
    List<Question> session=new ArrayList<>();
    int pos=0, correct=0;
    String mode="daily";

    final int BG=Color.rgb(17,17,17), CARD=Color.rgb(29,29,29), WHITE=Color.WHITE,
            MUTED=Color.rgb(170,170,170), RED=Color.rgb(255,77,77), GREEN=Color.rgb(64,190,120),
            DARK=Color.rgb(45,45,45);

    @Override public void onCreate(Bundle b){super.onCreate(b);store=new ProgressStore(this);showHome();}

    TextView tv(String text,float size,int color,boolean bold){
        TextView v=new TextView(this);v.setText(text);v.setTextSize(size);v.setTextColor(color);
        v.setPadding(0,0,0,0);if(bold)v.setTypeface(Typeface.DEFAULT,Typeface.BOLD);return v;
    }
    GradientDrawable bg(int color,float radius){GradientDrawable g=new GradientDrawable();g.setColor(color);g.setCornerRadius(radius);return g;}
    Button button(String text,int color){
        Button b=new Button(this);b.setText(text);b.setTextSize(15);b.setTextColor(WHITE);b.setAllCaps(false);
        b.setTypeface(Typeface.DEFAULT,Typeface.BOLD);b.setBackground(bg(color,28));b.setPadding(18,8,18,8);return b;
    }
    void base(String title){
        root=new LinearLayout(this);root.setOrientation(LinearLayout.VERTICAL);root.setBackgroundColor(BG);root.setPadding(24,26,24,22);
        ScrollView sv=new ScrollView(this);body=new LinearLayout(this);body.setOrientation(LinearLayout.VERTICAL);
        sv.addView(body);root.addView(sv,new LinearLayout.LayoutParams(-1,0,1));setContentView(root);
        body.addView(tv(title,28,WHITE,true));space(8);
    }
    void space(int h){Space s=new Space(this);body.addView(s,new LinearLayout.LayoutParams(1,h));}
    void card(String text,int color,float size,boolean bold){
        TextView t=tv(text,size,color,bold);t.setBackground(bg(CARD,20));t.setPadding(18,16,18,16);
        LinearLayout.LayoutParams lp=new LinearLayout.LayoutParams(-1,-2);lp.setMargins(0,0,0,10);body.addView(t,lp);
    }

    void showHome(){
        base("EXECUTIVE GYM");
        body.addView(tv("Тренажёр управленческого мышления",15,MUTED,false));space(14);
        LinearLayout stats=new LinearLayout(this);
        TextView a=tv("УРОВЕНЬ "+store.level()+"\n"+store.xp()+" XP",17,WHITE,true);
        TextView b=tv("🔥 "+store.streak()+" дней\n"+store.totalCorrect()+"/"+store.totalAnswered()+" верных",17,WHITE,true);
        stats.addView(a,new LinearLayout.LayoutParams(0,-2,1));stats.addView(b,new LinearLayout.LayoutParams(0,-2,1));body.addView(stats);space(16);

        Button daily=button(store.completedToday()?"Ежедневная тренировка • ещё раз":"Ежедневная тренировка • 45 минут",RED);
        daily.setOnClickListener(v->{mode="daily";session=QuestionBank.daily(store,15);start();});
        body.addView(daily,new LinearLayout.LayoutParams(-1,60));space(10);

        card("Ежедневный режим сам смешивает 6 навыков и чаще возвращает темы, где результат слабее.",WHITE,14,false);
        space(10);
        body.addView(tv("ТОЧЕЧНАЯ ТРЕНИРОВКА",12,MUTED,true));space(8);
        body.addView(tv("Выбери один навык и прокачивай только его.",15,WHITE,false));space(10);

        for(String skill:QuestionBank.skills()){
            final String s=skill;int score=store.score(s);
            Button x=button(skill+"    "+score+"/100",DARK);
            x.setGravity(Gravity.LEFT|Gravity.CENTER_VERTICAL);
            x.setOnClickListener(v->{mode=s;session=QuestionBank.forSkill(store,s,8);start();});
            body.addView(x,new LinearLayout.LayoutParams(-1,56));space(7);
        }
        space(8);
        card("Принцип: не запоминай «правильный ответ». Учись видеть последствия, trade-offs, риск, leverage и уровень ответственности.",MUTED,13,false);
    }

    void start(){pos=0;correct=0;showQuestion();}

    void showQuestion(){
        base(mode.equals("daily")?"ЕЖЕДНЕВНАЯ ТРЕНИРОВКА":"ТОЧЕЧНАЯ ТРЕНИРОВКА");
        Question q=session.get(pos);
        body.addView(tv((pos+1)+" / "+session.size()+"     "+q.skill,13,RED,true));space(9);
        body.addView(tv(q.title,23,WHITE,true));space(10);
        card(q.scenario,WHITE,16,false);
        body.addView(tv("Выбери действие руководителя.",13,MUTED,false));space(10);
        for(int i=0;i<q.options.length;i++){
            final int idx=i;Button b=button((i+1)+". "+q.options[i],DARK);
            b.setGravity(Gravity.LEFT|Gravity.CENTER_VERTICAL);
            b.setOnClickListener(v->answer(q,idx,b));body.addView(b,new LinearLayout.LayoutParams(-1,-2));space(8);
        }
    }

    void answer(Question q,int chosen,Button selected){
        boolean ok=chosen==q.correct;if(ok)correct++;store.answer(q.skill,ok);
        selected.setBackground(bg(ok?GREEN:Color.rgb(145,55,55),18));
        selected.setText((ok?"✓ ":"✕ ")+selected.getText());
        body.addView(tv(ok?"Верно":"Разбор решения",18,ok?GREEN:RED,true));space(8);
        card(q.explanation+"\n\nТип ошибки: "+q.errorType,MUTED,14,false);
        Button next=button(pos+1<session.size()?"Следующее":"Завершить",RED);
        next.setOnClickListener(v->{if(pos+1<session.size()){pos++;showQuestion();}else finishSession();});
        body.addView(next,new LinearLayout.LayoutParams(-1,58));
    }

    void finishSession(){
        if(mode.equals("daily"))store.completeDay();
        base(mode.equals("daily")?"ДЕНЬ ЗАВЕРШЁН":"ТРЕНИРОВКА ЗАВЕРШЕНА");
        int pct=Math.round(correct*100f/session.size());
        body.addView(tv("+"+(correct*12+(session.size()-correct)*4)+" XP",34,RED,true));space(7);
        body.addView(tv(correct+" из "+session.size()+" решений • "+pct+"%",20,WHITE,true));space(16);
        card(mode.equals("daily")
                ?"Следующая ежедневная тренировка будет сильнее фокусироваться на навыках, где сегодня были ошибки."
                :"Точечная тренировка обновила твой профиль навыка. Повтори её позже, чтобы проверить, что ошибка действительно исчезла.",
                WHITE,15,false);
        space(10);
        if(!mode.equals("daily")){
            Button again=button("Повторить этот навык",RED);again.setOnClickListener(v->{session=QuestionBank.forSkill(store,mode,8);start();});
            body.addView(again,new LinearLayout.LayoutParams(-1,58));space(8);
        }
        Button home=button("Вернуться к навыкам",DARK);home.setOnClickListener(v->showHome());
        body.addView(home,new LinearLayout.LayoutParams(-1,58));
    }

    @Override public void onBackPressed(){showHome();}
}
