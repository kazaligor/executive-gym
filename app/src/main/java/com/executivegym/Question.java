package com.executivegym;

public class Question {
    public final String skill, title, scenario, explanation, errorType;
    public final String[] options;
    public final int correct, difficulty;

    public Question(String skill, String title, String scenario, String[] options, int correct,
                    String explanation, String errorType, int difficulty) {
        this.skill=skill; this.title=title; this.scenario=scenario; this.options=options;
        this.correct=correct; this.explanation=explanation; this.errorType=errorType;
        this.difficulty=difficulty;
    }
}
