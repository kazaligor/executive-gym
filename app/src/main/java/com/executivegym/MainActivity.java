package com.executivegym;

import android.app.*;
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

    final int BG=Color.rgb(17,17,17), CARD=Color.rgb(29,29,29), WHITE=Color.WHITE, MUTED=Color.rgb(170,170,170), RED=Color.rgb(255,77,77), GREEN=Color.rgb(64,190,120);

    @Override public void onCreate(Bundle b){super.onCreate(b); store=new ProgressStore(this); showHome();}

    TextView tv(String text,float size,int color,boolean bold){
        TextView v=new TextView(this); v.setText(text); v.setTextSize(size); v.setTextColor(color); v.setPadding(0,0,0,0);
        if(bold)v.setTypeface(Typeface.DEFAULT,Typeface.BOLD); return v;
    }
    GradientDrawable bg(int color,float radius){GradientDrawable g=new GradientDrawable();g.setColor(color);g.setCornerRadius(radius);return g;}
    Button button(String text){
        Button b=new Button(this); b.setText(text); b.setTextSize(15); b.setTextColor(WHITE); b.setAllCaps(false);
        b.setTypeface(Typeface.DEFAULT,Typeface.BOLD); b.setBackground(bg(RED,28)); b.setPadding(18,8,18,8);
        return b;
    }
    void base(String title){
        root=new LinearLayout(this); root.setOrientation(LinearLayout.VERTICAL); root.setBackgroundColor(BG);
        root.setPadding(24,26,24,22);
        ScrollView sv=new ScrollView(this); body=new LinearLayout(this); body.setOrientation(LinearLayout.VERTICAL);
        sv.addView(body); root.addView(sv,new LinearLayout.LayoutParams(-1,0,1)); setContentView(root);
        TextView h=tv(title,28,WHITE,true); body.addView(h); space(10);
    }
    void space(int h){Space s=new Space(this);body.addView(s,new LinearLayout.LayoutParams(1,h));}
    void card(LinearLayout parent,String text,int color,float size,boolean bold){
        TextView t=tv(text,size,color,bold); t.setBackground(bg(CARD,22));t.setPadding(18,16,18,16);
        LinearLayout.LayoutParams lp=new LinearLayout.LayoutParams(-1,-2);lp.setMargins(0,0,0,10);parent.addView(t,lp);
    }

    void showHome(){
        base("EXECUTIVE GYM");
        body.addView(tv("Ежедневная тренировка руководителя",15,MUTED,false)); space(18);
        LinearLayout top=new LinearLayout(this);top.setOrientation(LinearLayout.HORIZONTAL);
        TextView level=tv("УРОВЕНЬ "+store.level()+"\n"+store.xp()+" XP",17,WHITE,true);
        TextView streak=tv("🔥 "+store.streak()+" дней\n"+store.totalCorrect()+"/"+store.totalAnswered()+" верных",17,WHITE,true);
        top.addView(level,new LinearLayout.LayoutParams(0,-2,1));top.addView(streak,new LinearLayout.LayoutParams(0,-2,1));body.addView(top);space(18);

        card(body,"Сегодня: 15 упражнений • ~45 минут\nФокус адаптируется к твоим слабым навыкам.",WHITE,16,true);
        Button start=button(store.completedToday()?"Повторить тренировку":"Начать тренировку");
        start.setOnClickListener(v->{session=QuestionBank.daily(store,15);pos=0;correct=0;showQuestion();});
        body.addView(start,new LinearLayout.LayoutParams(-1,58));space(20);

        body.addView(tv("ПРОФИЛЬ НАВЫКОВ",12,MUTED,true));space(8);
        String[] skills={"Стратегическое мышление","Решение и judgment","Лидерство и люди","Бизнес и P&L","Коммуникация руководителя","Личная эффективность"};
        for(String s:skills){
            int sc=store.score(s); TextView t=tv(s+"\n"+sc+"/100",15,WHITE,true);t.setBackground(bg(CARD,18));t.setPadding(16,13,16,13);
            LinearLayout.LayoutParams lp=new LinearLayout.LayoutParams(-1,64);lp.setMargins(0,0,0,8);body.addView(t,lp);
        }
        space(8);
        card(body,"Правило Executive Gym: не угадывать правильный ответ, а учиться видеть trade-offs, риски, leverage и последствия решений.",MUTED,13,false);
    }

    void showQuestion(){
        base("ТРЕНИРОВКА");
        Question q=session.get(pos);
        body.addView(tv((pos+1)+" / "+session.size()+"     "+q.skill,13,RED,true));space(10);
        TextView title=tv(q.title,23,WHITE,true);body.addView(title);space(10);
        card(body,q.scenario,WHITE,16,false);space(6);
        body.addView(tv("Выбери действие, которое сделал бы руководитель.",13,MUTED,false));space(10);
        for(int i=0;i<q.options.length;i++){
            final int idx=i; Button b=button((i+1)+". "+q.options[i]); b.setBackground(bg(Color.rgb(43,43,43),18)); b.setTextColor(WHITE);
            b.setOnClickListener(v->answer(q,idx,b));body.addView(b,new LinearLayout.LayoutParams(-1,-2));space(8);
        }
    }

    void answer(Question q,int chosen,Button chosenButton){
        boolean ok=chosen==q.correct;if(ok)correct++;
        store.answer(q.skill,ok);
        chosenButton.setBackground(bg(ok?GREEN:Color.rgb(150,55,55),18));
        chosenButton.setText((ok?"✓ ":"✕ ")+chosenButton.getText());
        body.addView(tv(ok?"Верно.":"Не лучший выбор.",18,ok?GREEN:RED,true));
        space(8);
        card(body,"ПОЧЕМУ\n"+q.explanation+"\n\nОшибка: "+q.errorType,MUTED,14,false);
        Button next=button(pos+1<session.size()?"Следующее":"Завершить");
        next.setOnClickListener(v->{if(pos+1<session.size()){pos++;showQuestion();}else finishSession();});
        body.addView(next,new LinearLayout.LayoutParams(-1,58));
    }

    void finishSession(){
        store.completeDay(); base("ТРЕНИРОВКА ЗАВЕРШЕНА");
        body.addView(tv("+"+(correct*12+(session.size()-correct)*4)+" XP",34,RED,true));space(8);
        body.addView(tv(correct+" из "+session.size()+" решений — "+Math.round(correct*100f/session.size())+"%",19,WHITE,true));space(18);
        card(body,"Главное: ошибки — это данные для следующей тренировки. Executive Gym будет чаще возвращать навыки, где результат слабее.",WHITE,15,false);
        space(12);
        Button again=button("Сделать ещё 15 упражнений");again.setOnClickListener(v->{session=QuestionBank.daily(store,15);pos=0;correct=0;showQuestion();});body.addView(again,new LinearLayout.LayoutParams(-1,58));
        space(10);
        Button home=button("На главный экран");home.setBackground(bg(Color.rgb(55,55,55),28));home.setOnClickListener(v->showHome());body.addView(home,new LinearLayout.LayoutParams(-1,58));
    }
}
