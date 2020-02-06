
import 'dart:math';
import 'package:burnout/values/values.dart';
import 'package:flutter/widgets.dart';
import 'package:supernova_flutter_ui_toolkit/keyframes.dart';

Animation<double> _createRotationZProperty(AnimationController animationController) => Interpolation<double>(keyframes: [
  Keyframe<double>(fraction: 0, value: 0),
  Keyframe<double>(fraction: 0.00001, value: 0),
  Keyframe<double>(fraction: 1, value: -360),
]).animate(CurvedAnimation(
  curve: Interval(0, 1, curve: Cubic(0, 0, 1, 1)),
  parent: animationController,
));


class MainWidgetAnimation1Element2 extends StatelessWidget {
  
  MainWidgetAnimation1Element2({
    Key key,
    this.child,
    @required AnimationController animationController
  }) : assert(animationController != null),
       this.rotationZ = _createRotationZProperty(animationController),
       super(key: key);
  
  final Animation<double> rotationZ;
  final Widget child;
  
  
  @override
  Widget build(BuildContext context) {
  
    return AnimatedBuilder(
      animation: Listenable.merge([
        this.rotationZ,
      ]),
      child: this.child,
      builder: (context, widget) {
      
        return Transform.rotate(
          angle: this.rotationZ.value / 180 * pi,
          alignment: Alignment.center,
          child: widget,
        );
      },
    );
  }
}