
import 'package:burnout/main_widget/main_widget_animation1_element1.dart';
import 'package:burnout/main_widget/main_widget_animation1_element2.dart';
import 'package:burnout/values/values.dart';
import 'package:flutter/animation.dart';
import 'package:flutter/material.dart';


class MainWidget extends StatefulWidget {
  
  @override
  State<StatefulWidget> createState() => _MainWidgetState();
}


class _MainWidgetState extends State<MainWidget> with TickerProviderStateMixin {
  AnimationController group8ImageAnimationController;
  AnimationController group7ImageAnimationController;
  
  @override
  void initState() {
  
    super.initState();
    
    this.group8ImageAnimationController = AnimationController(duration: Duration(milliseconds: 60000), vsync: this);
    this.group7ImageAnimationController = AnimationController(duration: Duration(milliseconds: 35000), vsync: this);
    
    this.startAnimationOne();
  }
  
  @override
  void dispose() {
  
    super.dispose();
    
    this.group8ImageAnimationController.dispose();
    this.group7ImageAnimationController.dispose();
  }
  
  void startAnimationOne() {
  
    this.group8ImageAnimationController.forward();
    this.group7ImageAnimationController.forward();
  }
  
  @override
  Widget build(BuildContext context) {
  
    return Scaffold(
      body: Container(
        constraints: BoxConstraints.expand(),
        decoration: BoxDecoration(
          color: Color.fromARGB(255, 255, 255, 255),
        ),
        child: Stack(
          alignment: Alignment.center,
          children: [
            Positioned(
              child: Image.asset(
                "assets/images/group-5-2.png",
                fit: BoxFit.cover,
              ),
            ),
            Positioned(
              left: 21,
              top: 73,
              right: 20,
              bottom: 64,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Text(
                    "The sun will go supernova and swallow the earth in about…",
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      color: Color.fromARGB(255, 255, 255, 255),
                      fontFamily: "Europa-Light",
                      fontWeight: FontWeight.w300,
                      fontSize: 32,
                    ),
                  ),
                  Container(
                    height: 257,
                    margin: EdgeInsets.only(left: 39, top: 99, right: 41),
                    child: Stack(
                      alignment: Alignment.center,
                      children: [
                        Positioned(
                          top: 24,
                          child: MainWidgetAnimation1Element2(
                            animationController: this.group7ImageAnimationController,
                            child: Image.asset(
                              "assets/images/group-7.png",
                              fit: BoxFit.cover,
                            ),
                          ),
                        ),
                        Positioned(
                          left: 0,
                          top: 0,
                          right: 0,
                          child: MainWidgetAnimation1Element1(
                            animationController: this.group8ImageAnimationController,
                            child: Image.asset(
                              "assets/images/group-8.png",
                              fit: BoxFit.cover,
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                  Spacer(),
                  Align(
                    alignment: Alignment.topCenter,
                    child: Container(
                      height: 114,
                      child: Text(
                        "This is a fact that you should maybe look up before that happens.",
                        textAlign: TextAlign.center,
                        style: TextStyle(
                          color: Color.fromARGB(255, 255, 255, 255),
                          fontFamily: "Europa-Light",
                          fontWeight: FontWeight.w300,
                          fontSize: 32,
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
            Positioned(
              child: Stack(
                alignment: Alignment.topCenter,
                children: [
                  Positioned(
                    top: 0,
                    child: Text(
                      "157680000000000000000",
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        color: Color.fromARGB(255, 255, 255, 255),
                        fontFamily: "Europa-Bold",
                        fontWeight: FontWeight.w700,
                        fontSize: 40,
                      ),
                    ),
                  ),
                  Positioned(
                    left: 0,
                    right: 0,
                    bottom: 0,
                    child: Text(
                      "years.",
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        color: Color.fromARGB(255, 255, 255, 255),
                        fontFamily: "Europa-Bold",
                        fontWeight: FontWeight.w700,
                        fontSize: 40,
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}