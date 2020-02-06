
import 'package:burnout/intro_widget/intro_widget_animation1.dart';
import 'package:burnout/values/values.dart';
import 'package:flutter/animation.dart';
import 'package:flutter/material.dart';


class IntroWidget extends StatefulWidget {
  
  @override
  State<StatefulWidget> createState() => _IntroWidgetState();
}


class _IntroWidgetState extends State<IntroWidget> with SingleTickerProviderStateMixin {
  AnimationController group2AnimationController;
  
  @override
  void initState() {
  
    super.initState();
    this.group2AnimationController = AnimationController(duration: Duration(milliseconds: 1000), vsync: this);
    this.startAnimationOne();
  }
  
  @override
  void dispose() {
  
    super.dispose();
    this.group2AnimationController.dispose();
  }
  
  void startAnimationOne() => this.group2AnimationController.forward();
  
  @override
  Widget build(BuildContext context) {
  
    return Scaffold(
      body: Container(
        constraints: BoxConstraints.expand(),
        decoration: BoxDecoration(
          color: Color.fromARGB(255, 255, 224, 106),
        ),
        child: Column(
          children: [
            Container(
              margin: EdgeInsets.only(top: 321),
              child: IntroWidgetAnimation1(
                animationController: this.group2AnimationController,
                child: Container(
                  width: 178,
                  height: 178,
                  decoration: BoxDecoration(
                    color: AppColors.primaryBackground,
                    boxShadow: [
                      Shadows.primaryShadow,
                    ],
                    borderRadius: Radii.k88pxRadius,
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.end,
                    children: [
                      Container(
                        width: 37,
                        height: 38,
                        margin: EdgeInsets.only(top: 37, right: 34),
                        decoration: BoxDecoration(
                          color: AppColors.primaryElement,
                          borderRadius: BorderRadius.all(Radius.circular(18.36007)),
                        ),
                        child: Container(),
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}