package com.services.pojo.csedemo;

import com.services.pojo.csedemo.model.Person;


public class CsedemoAgent {

    public Integer add(Integer a, Integer b){

        // Do Some Magic Here!
        if（null == a || null == b）
            return null;
        return a+b;
    };


    public String sayHei(String name){

        // Do Some Magic Here!
        if(null == name) 
            return null;
        return "hello "+name;
    };


    public String sayHello(String name){

        // Do Some Magic Here!
        return null;
    };


    public String sayHi(String name){

        // Do Some Magic Here!
        return null;
    };


    public String saySomething(String prefix, Person user){

        // Do Some Magic Here!
        return null;
    };

}
