
import 'dart:math';
import 'package:burnout/values/values.dart';
import 'package:flutter/widgets.dart';
import 'package:supernova_flutter_ui_toolkit/keyframes.dart';

Animation<double> _createScaleProperty(AnimationController animationController) => Interpolation<double>(keyframes: [
  Keyframe<double>(fraction: 0, value: 1),
  Keyframe<double>(fraction: 0.00001, value: 1),
  Keyframe<double>(fraction: 0.4, value: 1.2),
  Keyframe<double>(fraction: 0.73333, value: 1),
  Keyframe<double>(fraction: 0.86667, value: 1.05),
  Keyframe<double>(fraction: 1, value: 1.05),
]).animate(CurvedAnimation(
  curve: Interval(0, 1, curve: Cubic(0, 0, 0.58, 1)),
  parent: animationController,
));


class IntroWidgetAnimation1 extends StatelessWidget {
  
  IntroWidgetAnimation1({
    Key key,
    this.child,
    @required AnimationController animationController
  }) : assert(animationController != null),
       this.scale = _createScaleProperty(animationController),
       super(key: key);
  
  final Animation<double> scale;
  final Widget child;
  
  
  @override
  Widget build(BuildContext context) {
  
    return AnimatedBuilder(
      animation: Listenable.merge([
        this.scale,
      ]),
      child: this.child,
      builder: (context, widget) {
      
        return Transform.scale(
          scale: this.scale.value,
          alignment: Alignment.center,
          child: widget,
        );
      },
    );
  }
}