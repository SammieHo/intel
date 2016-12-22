(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.intelFaq = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_100 = function() {
		this.stop();
	}
	this.frame_200 = function() {
		this.stop();
	}
	this.frame_300 = function() {
		this.stop();
	}
	this.frame_400 = function() {
		this.stop();
	}
	this.frame_500 = function() {
		this.stop();
	}
	this.frame_600 = function() {
		this.stop();
	}
	this.frame_700 = function() {
		this.stop();
	}
	this.frame_750 = function() {
		this.stop();
	}
	this.frame_800 = function() {
		this.stop();
	}
	this.frame_850 = function() {
		this.stop();
	}
	this.frame_900 = function() {
		this.stop();
	}
	this.frame_950 = function() {
		this.stop();
	}
	this.frame_1000 = function() {
		this.stop();
	}
	this.frame_1050 = function() {
		this.stop();
	}
	this.frame_1150 = function() {
		this.stop();
	}
	this.frame_1250 = function() {
		this.stop();
	}
	this.frame_1350 = function() {
		this.stop();
	}
	this.frame_1364 = function() {
		readyFaq();
	}
	this.frame_1450 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(100).call(this.frame_100).wait(100).call(this.frame_200).wait(100).call(this.frame_300).wait(100).call(this.frame_400).wait(100).call(this.frame_500).wait(100).call(this.frame_600).wait(100).call(this.frame_700).wait(50).call(this.frame_750).wait(50).call(this.frame_800).wait(50).call(this.frame_850).wait(50).call(this.frame_900).wait(50).call(this.frame_950).wait(50).call(this.frame_1000).wait(50).call(this.frame_1050).wait(100).call(this.frame_1150).wait(100).call(this.frame_1250).wait(100).call(this.frame_1350).wait(14).call(this.frame_1364).wait(86).call(this.frame_1450));

	// btn-play
	this.btn_play = new lib.btnplay();
	this.btn_play.setTransform(321.5,916.7,1,1,0,0,0,63.5,63.5);
	this.btn_play._off = true;
	new cjs.ButtonHelper(this.btn_play, 0, 1, 2, false, new lib.btnplay(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_play).wait(100).to({_off:false},0).to({_off:true},1251).wait(100));

	// arrow
	this.instance = new lib.arrow();
	this.instance.setTransform(320.1,953.6,1,1,0,0,0,17.2,3.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100).to({_off:false},0).to({_off:true},1251).wait(100));

	// logo
	this.instance_1 = new lib.logo();
	this.instance_1.setTransform(20,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[]},101).to({state:[]},1325).wait(25));

	// zhongjiang
	this.zhongjiang1 = new lib.pzhongjiang1();
	this.zhongjiang1.setTransform(320,505,1,1,0,0,0,320,505);
	this.zhongjiang1.visible = false;

	this.zhongjiang2 = new lib.pzhongjiang2();
	this.zhongjiang2.setTransform(320,505,1,1,0,0,0,320,505);
	this.zhongjiang2.visible = false;

	this.zhongjiang3 = new lib.pzhongjiang3();
	this.zhongjiang3.setTransform(320,505,1,1,0,0,0,320,505);
	this.zhongjiang3.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.zhongjiang3},{t:this.zhongjiang2},{t:this.zhongjiang1}]},1450).wait(1));

	// f
	this.con = new lib.con();
	this.con.setTransform(320,1665,1,1,0,0,0,320,505);
	this.con._off = true;

	this.timeline.addTween(cjs.Tween.get(this.con).wait(1364).to({_off:false},0).to({y:505},59,cjs.Ease.get(1)).wait(28));

	// p8-2
	this.instance_2 = new lib.p82_1();
	this.instance_2.setTransform(320,1158.5,1,1,0,0,0,177.5,28.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1364).to({_off:false},0).to({y:118.5},59,cjs.Ease.get(1)).to({alpha:0},27).wait(1));

	// p8-1
	this.instance_3 = new lib.p81_1();
	this.instance_3.setTransform(320,1515,1,1,0,0,0,320,505);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1350).to({_off:false},0).to({y:505},49,cjs.Ease.get(1)).wait(52));

	// p7-3
	this.instance_4 = new lib.p73_1();
	this.instance_4.setTransform(320,1480.1,1,1,0,0,0,103,37.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1269).to({_off:false},0).to({y:468.1},50,cjs.Ease.get(1)).wait(31).to({y:-583.7},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(51));

	// p3-2
	this.instance_5 = new lib.p32_1();
	this.instance_5.setTransform(320,1494.1,1,1,0,0,0,169,169);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1269).to({_off:false},0).to({y:482.1},50,cjs.Ease.get(1)).to({scaleX:0.79,scaleY:0.79},20).to({scaleX:1,scaleY:1},11).to({y:-609.7},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(51));

	// p7-2
	this.instance_6 = new lib.p72_1();
	this.instance_6.setTransform(320,1131,1,1,0,0,0,179.5,29);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1269).to({_off:false},0).to({y:119},30,cjs.Ease.get(1)).wait(51).to({y:-1012.8},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(51));

	// p7-1
	this.instance_7 = new lib.p71_1();
	this.instance_7.setTransform(320,1517,1,1,0,0,0,320,505);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1250).to({_off:false},0).to({y:505},49,cjs.Ease.get(1)).wait(51).to({y:-506.8},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(51));

	// p6-3
	this.instance_8 = new lib.p63_1();
	this.instance_8.setTransform(256.5,1229.5,1,1,0,0,0,199,59.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1164).to({_off:false},0).to({y:149.5},61,cjs.Ease.get(1)).wait(25).to({y:-1022.3},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(151));

	// map
	this.instance_9 = new lib.map("synched",0);
	this.instance_9.setTransform(314.5,505,1,1,0,0,0,193.5,193);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1185).to({startPosition:0,_off:false},0).wait(65).to({startPosition:65},0).to({y:-586.8,startPosition:114},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(151));

	// p6-1
	this.instance_10 = new lib.p61_1();
	this.instance_10.setTransform(320,1515,1,1,0,0,0,320,505);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1150).to({_off:false},0).to({y:505},49,cjs.Ease.get(1)).wait(51).to({y:-506.8},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(151));

	// p5-3
	this.instance_11 = new lib.p53_1();
	this.instance_11.setTransform(288,1169.5,1,1,0,0,0,230.5,29.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1064).to({_off:false},0).to({y:119.5},65,cjs.Ease.get(1)).wait(21).to({y:-1051.3},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(251));

	// p5-4
	this.instance_12 = new lib.p54_1();
	this.instance_12.setTransform(253.5,1432.1,1,1,0,0,0,196,154);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1064).to({_off:false},0).to({y:342.1},75,cjs.Ease.get(1)).wait(11).to({y:-748.7},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(251));

	// p5-2
	this.instance_13 = new lib.p52_1();
	this.instance_13.setTransform(439.6,1840.2,1,1,0,0,0,126,126);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1064).to({_off:false},0).to({y:710.2},86,cjs.Ease.get(1)).to({y:-340.6},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(251));

	// p5-1
	this.instance_14 = new lib.p51_1();
	this.instance_14.setTransform(320,1515,1,1,0,0,0,320,505);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1050).to({_off:false},0).to({y:505},50,cjs.Ease.get(1)).wait(50).to({y:-505.8},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(251));

	// yuan
	this.instance_15 = new lib.yuan1();
	this.instance_15.setTransform(212.6,635.2,2,2,0,0,0,4.5,4.5);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1025).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},10,cjs.Ease.get(1)).wait(15).to({y:-496.6},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(351));

	// p4-12
	this.instance_16 = new lib.p412_1();
	this.instance_16.setTransform(425.2,629.2,1,1,0,0,0,89.5,54);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1035).to({_off:false},0).to({alpha:1},15).to({y:-502.6},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(351));

	// target
	this.instance_17 = new lib.target();
	this.instance_17.setTransform(212.2,635,2,2);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1010).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},15,cjs.Ease.get(0.99)).wait(25).to({y:-496.9},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(351));

	// p4-4
	this.instance_18 = new lib.p44_1();
	this.instance_18.setTransform(262.4,584.7,0.7,0.7,0,0,0,20.6,20.4);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(975).to({_off:false},0).to({scaleX:0.35,scaleY:0.35,alpha:1},10,cjs.Ease.get(1)).wait(30).to({x:328.1,y:519.7},15,cjs.Ease.get(1)).wait(20).to({y:-612.1},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(351));

	// p4-11
	this.instance_19 = new lib.p411_1();
	this.instance_19.setTransform(485.1,595.2,1,1,0,0,0,89,45.5);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(985).to({_off:false},0).to({alpha:1},15).to({alpha:0},15).to({_off:true},1).wait(435));

	// target
	this.instance_20 = new lib.target();
	this.instance_20.setTransform(262.4,584.7,2,2);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(960).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},15,cjs.Ease.get(1)).wait(25).to({scaleX:0.3,scaleY:0.3,alpha:0},15).to({_off:true},1).wait(435));

	// p4-4
	this.instance_21 = new lib.p44_1();
	this.instance_21.setTransform(296.4,550.2,0.8,0.8,0,0,0,20.5,20.4);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(925).to({_off:false},0).to({scaleX:0.4,scaleY:0.4,alpha:1},10).wait(30).to({x:363.4,y:484.2},15,cjs.Ease.get(1)).wait(70).to({y:-647.6},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(351));

	// p4-10
	this.instance_22 = new lib.p410_1();
	this.instance_22.setTransform(509.7,556.2,1,1,0,0,0,77.5,42);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(935).to({_off:false},0).to({alpha:1},15).to({alpha:0},15).to({_off:true},1).wait(485));

	// target
	this.instance_23 = new lib.target();
	this.instance_23.setTransform(296.4,550.2,2,2);
	this.instance_23.alpha = 0;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(910).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},15,cjs.Ease.get(1)).wait(25).to({scaleX:0.3,scaleY:0.3,alpha:0},15,cjs.Ease.get(-0.99)).to({_off:true},1).wait(485));

	// p4-4
	this.instance_24 = new lib.p44_1();
	this.instance_24.setTransform(320.3,526.2,0.9,0.9,0,0,0,20.4,20.4);
	this.instance_24.alpha = 0;
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(875).to({_off:false},0).to({scaleX:0.45,scaleY:0.45,x:320.4,alpha:1},10,cjs.Ease.get(1)).wait(30).to({x:400.9,y:446.2},15,cjs.Ease.get(1)).wait(120).to({y:-685.6},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(351));

	// p4-9
	this.instance_25 = new lib.p49_1();
	this.instance_25.setTransform(114.9,531.2,1,1,0,0,0,81,53.5);
	this.instance_25.alpha = 0;
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(885).to({_off:false},0).to({alpha:1},15).to({alpha:0},15).to({_off:true},1).wait(535));

	// target
	this.instance_26 = new lib.target();
	this.instance_26.setTransform(320.4,526.2,2,2);
	this.instance_26.alpha = 0;
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(860).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},15,cjs.Ease.get(1)).wait(25).to({scaleX:0.3,scaleY:0.3,alpha:0},15,cjs.Ease.get(-0.99)).to({_off:true},1).wait(535));

	// p4-4
	this.instance_27 = new lib.p44_1();
	this.instance_27.setTransform(359.4,487.2,1,1,0,0,0,20.5,20.5);
	this.instance_27.alpha = 0;
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(825).to({_off:false},0).to({scaleX:0.5,scaleY:0.5,alpha:1},10,cjs.Ease.get(1)).wait(30).to({x:432.4,y:414.2},15,cjs.Ease.get(1)).wait(170).to({y:-717.6},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(351));

	// p4-8
	this.instance_28 = new lib.p48_1();
	this.instance_28.setTransform(138,490.1,1,1,0,0,0,99.5,29);
	this.instance_28.alpha = 0;
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(835).to({_off:false},0).to({alpha:1},15).to({alpha:0},15).to({_off:true},1).wait(585));

	// target
	this.instance_29 = new lib.target();
	this.instance_29.setTransform(359.4,487.2,2,2);
	this.instance_29.alpha = 0;
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(810).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},15,cjs.Ease.get(0.98)).wait(25).to({scaleX:0.3,scaleY:0.3,alpha:0},15,cjs.Ease.get(-0.99)).to({_off:true},1).wait(585));

	// p4-4
	this.instance_30 = new lib.p44_1();
	this.instance_30.setTransform(404.4,441.6,1.2,1.2,0,0,0,20.5,20.5);
	this.instance_30.alpha = 0;
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(775).to({_off:false},0).to({scaleX:0.6,scaleY:0.6,alpha:1},10,cjs.Ease.get(1)).wait(30).to({x:467.4,y:378.2},15,cjs.Ease.get(1)).wait(220).to({y:-753.6},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(351));

	// p4-7
	this.instance_31 = new lib.p47_1();
	this.instance_31.setTransform(200.1,448.1,1,1,0,0,0,74,27);
	this.instance_31.alpha = 0;
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(785).to({_off:false},0).to({alpha:1},15).to({alpha:0},15).to({_off:true},1).wait(635));

	// target
	this.instance_32 = new lib.target();
	this.instance_32.setTransform(404.4,441.6,2,2);
	this.instance_32.alpha = 0;
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(760).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},15,cjs.Ease.get(1)).wait(25).to({scaleX:0.3,scaleY:0.3,alpha:0},15,cjs.Ease.get(-0.99)).to({_off:true},1).wait(635));

	// p4-4
	this.instance_33 = new lib.p44_1();
	this.instance_33.setTransform(444.4,401.6,1.4,1.4,0,0,0,20.5,20.5);
	this.instance_33.alpha = 0;
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(725).to({_off:false},0).to({scaleX:0.7,scaleY:0.7,alpha:1},10,cjs.Ease.get(1)).wait(30).to({x:506.8,y:339.6},15,cjs.Ease.get(0.77)).wait(270).to({y:-792.2},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(351));

	// p4-6
	this.instance_34 = new lib.p46_1();
	this.instance_34.setTransform(270.1,392.1,1,1,0,0,0,62,11);
	this.instance_34.alpha = 0;
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(735).to({_off:false},0).to({alpha:1},15).to({alpha:0},15).to({_off:true},1).wait(685));

	// target
	this.instance_35 = new lib.target();
	this.instance_35.setTransform(444.4,401.6,2,2);
	this.instance_35.alpha = 0;
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(710).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},15).wait(25).to({scaleX:0.3,scaleY:0.3,alpha:0},15,cjs.Ease.get(-0.99)).to({_off:true},1).wait(685));

	// p4-4
	this.instance_36 = new lib.p44_1();
	this.instance_36.setTransform(548.4,299.4,2,2,0,0,0,20.5,20.5);
	this.instance_36.alpha = 0;
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(675).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},10,cjs.Ease.get(1)).wait(365).to({y:-832.4},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(351));

	// p4-5
	this.instance_37 = new lib.p45_1();
	this.instance_37.setTransform(349,301,1,1,0,0,0,62,11);
	this.instance_37.alpha = 0;
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(685).to({_off:false},0).to({alpha:1},15).to({alpha:0},15,cjs.Ease.get(-0.99)).to({_off:true},1).wait(735));

	// target
	this.instance_38 = new lib.target();
	this.instance_38.setTransform(548.4,299.2,2,2);
	this.instance_38.alpha = 0;
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(649).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},26,cjs.Ease.get(1)).wait(25).to({scaleX:0.3,scaleY:0.3,alpha:0},15,cjs.Ease.get(-0.99)).to({_off:true},1).wait(735));

	// p4-2
	this.instance_39 = new lib.p42_1();
	this.instance_39.setTransform(262.5,1208.5,1,1,0,0,0,179,28.5);
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(613).to({_off:false},0).to({y:118.5},36,cjs.Ease.get(1)).wait(401).to({y:-973.3},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(351));

	// p4-1
	this.instance_40 = new lib.p41_1();
	this.instance_40.setTransform(320,1515,1,1,0,0,0,320,505);
	this.instance_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(600).to({_off:false},0).to({y:505},49,cjs.Ease.get(1)).wait(401).to({y:-506.8},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(351));

	// Layer 49
	this.instance_41 = new lib.p39_1();
	this.instance_41.setTransform(803.2,-35.9,1,1,0,0,0,134,41.5);
	this.instance_41._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(514).to({_off:false},0).to({x:352.5,y:336.5},86,cjs.Ease.get(1)).to({y:-792.7},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(801));

	// Layer 48
	this.instance_42 = new lib.p310_1();
	this.instance_42.setTransform(809,212.1,1,1,0,0,0,136.5,62);
	this.instance_42._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(514).to({_off:false},0).to({x:358.3,y:584.6},70,cjs.Ease.get(1)).wait(16).to({y:-504.6},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(801));

	// Layer 47
	this.instance_43 = new lib.p32_1();
	this.instance_43.setTransform(809,212.1,1,1,0,0,0,169,169);
	this.instance_43._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(514).to({_off:false},0).to({x:358.3,y:584.6},70,cjs.Ease.get(1)).wait(16).to({y:-464.6},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(801));

	// p3-8
	this.instance_44 = new lib.p38_1();
	this.instance_44.setTransform(873.5,-1.8,1,1,0,0,0,229.5,93);
	this.instance_44._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(414).to({_off:false},0).to({x:330.5,y:342.6},86,cjs.Ease.get(1)).to({x:-229.3,y:863.4},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(901));

	// p3-7
	this.instance_45 = new lib.p37_1();
	this.instance_45.setTransform(861.3,280.1,1,1,0,0,0,147.5,41);
	this.instance_45._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(414).to({_off:false},0).to({x:318.3,y:624.6},70,cjs.Ease.get(1)).wait(16).to({x:-241.5,y:1145.4},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(901));

	// p3-2
	this.instance_46 = new lib.p32_1();
	this.instance_46.setTransform(861.3,280.1,1,1,0,0,0,169,169);
	this.instance_46._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(414).to({_off:false},0).to({x:318.3,y:624.6},70,cjs.Ease.get(1)).wait(16).to({x:-241.5,y:1145.4},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(901));

	// p3-6
	this.instance_47 = new lib.p36_1();
	this.instance_47.setTransform(821.5,-33.9,1,1,0,0,0,156.5,40.5);
	this.instance_47._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(314).to({_off:false},0).to({x:290.8,y:418.7},86,cjs.Ease.get(1)).to({x:-196.3,y:803.2},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(1001));

	// p3-5
	this.instance_48 = new lib.p35_1();
	this.instance_48.setTransform(813.1,208.4,1,1,0,0,0,87.5,105);
	this.instance_48._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(314).to({_off:false},0).to({x:282.4,y:661},70,cjs.Ease.get(1)).wait(16).to({x:-204.7,y:1045.5},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(1001));

	// p3-2
	this.instance_49 = new lib.p32_1();
	this.instance_49.setTransform(809,212,1,1,0,0,0,169,169);
	this.instance_49._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(314).to({_off:false},0).to({x:278.3,y:664.6},70,cjs.Ease.get(1)).wait(16).to({x:-208.8,y:1049.1},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(1001));

	// p3-4
	this.instance_50 = new lib.p34_1();
	this.instance_50.setTransform(831.8,-14.9,1,1,0,0,0,160,40);
	this.instance_50._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(214).wait(29).to({_off:false},0).to({x:251,y:461.7},57,cjs.Ease.get(1)).to({x:-199.8,y:914.4},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(1101));

	// p3-4
	this.instance_51 = new lib.p33_1();
	this.instance_51.setTransform(819,217.5,1,1,0,0,0,101.5,93.5);
	this.instance_51._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(238).to({_off:false},0).to({x:238.2,y:694.3},47,cjs.Ease.get(1)).wait(15).to({x:-212.6,y:1146.9},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(1101));

	// p3-2
	this.instance_52 = new lib.p32_1();
	this.instance_52.setTransform(819.1,227.9,1,1,0,0,0,169,169);
	this.instance_52._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(238).to({_off:false},0).to({x:238.3,y:704.6},47,cjs.Ease.get(1)).wait(15).to({x:-212.5,y:1157.3},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(1101));

	// p2-12
	this.instance_53 = new lib.p212_1();
	this.instance_53.setTransform(320,1292,1,1,0,0,0,235,12);
	this.instance_53._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_53).wait(214).to({_off:false},0).to({y:182},35,cjs.Ease.get(1)).wait(351).to({y:-987.2},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(801));

	// p2-3
	this.instance_54 = new lib.p23_1();
	this.instance_54.setTransform(320,1188.5,1,1,0,0,0,179,28.5);
	this.instance_54._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_54).wait(214).to({_off:false},0).to({y:118.5},35,cjs.Ease.get(1)).wait(351).to({y:-1090.7},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(801));

	// p3-1
	this.instance_55 = new lib.p31_1();
	this.instance_55.setTransform(320,1515,1,1,0,0,0,320,505);
	this.instance_55._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_55).wait(200).to({_off:false},0).to({y:505},49,cjs.Ease.get(1)).wait(351).to({y:-504.2},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(801));

	// p2-11
	this.instance_56 = new lib.p211_1();
	this.instance_56.setTransform(665.7,793.2,1,1,0,0,0,33,75.5);
	this.instance_56.alpha = 0;
	this.instance_56._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_56).wait(185).to({_off:false},0).to({x:555.7,alpha:1},15,cjs.Ease.get(1)).to({y:-286.6},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(1201));

	// p2-10
	this.instance_57 = new lib.p210_1();
	this.instance_57.setTransform(551.3,794.2,1,1,0,0,0,34,76.5);
	this.instance_57.alpha = 0;
	this.instance_57._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_57).wait(181).to({_off:false},0).to({x:441.3,alpha:1},14,cjs.Ease.get(1)).wait(5).to({y:-285.6},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(1201));

	// p2-9
	this.instance_58 = new lib.p29_1();
	this.instance_58.setTransform(436.9,794.7,1,1,0,0,0,36,77);
	this.instance_58.alpha = 0;
	this.instance_58._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_58).wait(177).to({_off:false},0).to({x:326.9,alpha:1},14,cjs.Ease.get(1)).wait(9).to({y:-285.1},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(1201));

	// p2-8
	this.instance_59 = new lib.p28_1();
	this.instance_59.setTransform(322.5,794.7,1,1,0,0,0,38.5,77);
	this.instance_59.alpha = 0;
	this.instance_59._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_59).wait(174).to({_off:false},0).to({x:212.5,alpha:1},14,cjs.Ease.get(1)).wait(12).to({y:-285.1},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(1201));

	// p2-7
	this.instance_60 = new lib.p27_1();
	this.instance_60.setTransform(208.1,794.7,1,1,0,0,0,44,77);
	this.instance_60.alpha = 0;
	this.instance_60._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_60).wait(170).to({_off:false},0).to({x:98.1,alpha:1},14,cjs.Ease.get(1)).wait(16).to({y:-285.1},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(1201));

	// p2-6
	this.instance_61 = new lib.p26_1();
	this.instance_61.setTransform(288.5,587.2,0.2,0.2);
	this.instance_61._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_61).wait(170).to({_off:false},0).to({scaleX:1,scaleY:1},7,cjs.Ease.get(1)).wait(23).to({y:-592.7},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(1201));

	// p2-5
	this.instance_62 = new lib.p25_1();
	this.instance_62.setTransform(372.5,486.1,0.2,0.2);
	this.instance_62._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_62).wait(161).to({_off:false},0).to({scaleX:1,scaleY:1},7,cjs.Ease.get(1)).wait(32).to({y:-693.7},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(1201));

	// p2-4
	this.instance_63 = new lib.p24_1();
	this.instance_63.setTransform(378.7,337.1,0.2,0.2);
	this.instance_63._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_63).wait(149).to({_off:false},0).to({scaleX:1,scaleY:1},7,cjs.Ease.get(1)).wait(44).to({y:-842.8},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(1201));

	// p2-12
	this.instance_64 = new lib.p212_1();
	this.instance_64.setTransform(320,1262,1,1,0,0,0,235,12);
	this.instance_64._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_64).wait(115).to({_off:false},0).to({y:182},34,cjs.Ease.get(1)).wait(51).to({y:-1009.8},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(1201));

	// p2-3
	this.instance_65 = new lib.p23_1();
	this.instance_65.setTransform(320,1178.5,1,1,0,0,0,179,28.5);
	this.instance_65._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_65).wait(115).to({_off:false},0).to({y:118.5},34,cjs.Ease.get(1)).wait(51).to({y:-1153.3},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(1201));

	// p2-2
	this.instance_66 = new lib.p22_1();
	this.instance_66.setTransform(179.8,581.8,0.229,0.229,0,0,0,139.6,140);
	this.instance_66.alpha = 0;
	this.instance_66._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_66).wait(135).to({_off:false},0).to({regX:139.5,scaleX:1,scaleY:1,y:421.8,alpha:1},20,cjs.Ease.get(1)).wait(45).to({y:-758},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(1201));

	// Layer 26
	this.instance_67 = new lib.yuan();
	this.instance_67.setTransform(266.1,591.5,1,1,0,0,0,7,7);
	this.instance_67._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_67).wait(174).to({_off:false},0).wait(26).to({y:-588.3},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(1201));

	// Layer 27
	this.instance_68 = new lib.yuan();
	this.instance_68.setTransform(355.7,494.6,1,1,0,0,0,7,7);
	this.instance_68._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_68).wait(164).to({_off:false},0).wait(36).to({y:-685.2},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(1201));

	// Layer 28
	this.instance_69 = new lib.yuan();
	this.instance_69.setTransform(355.8,349.9,1,1,0,0,0,7,7);
	this.instance_69._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_69).wait(149).to({_off:false},0).wait(51).to({y:-829.9},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(1201));

	// Layer 33
	this.instance_70 = new lib.line2();
	this.instance_70.setTransform(317.9,470.8,1,1,0,0,0,51.8,120.7);
	this.instance_70._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_70).wait(200).to({_off:false},0).to({y:-709},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(1201));

	// Layer 31 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_149 = new cjs.Graphics().p("AwMATIAAglMAgZAAAIAAAlg");
	var mask_graphics_150 = new cjs.Graphics().p("AwMBGIAAiLMAgZAAAIAACLg");
	var mask_graphics_151 = new cjs.Graphics().p("AwMB5IAAjxMAgZAAAIAADxg");
	var mask_graphics_152 = new cjs.Graphics().p("AwMCsIAAlXMAgZAAAIAAFXg");
	var mask_graphics_153 = new cjs.Graphics().p("AwMDfIAAm9MAgZAAAIAAG9g");
	var mask_graphics_154 = new cjs.Graphics().p("AwMESIAAojMAgZAAAIAAIjg");
	var mask_graphics_155 = new cjs.Graphics().p("AwMFEIAAqHMAgZAAAIAAKHg");
	var mask_graphics_156 = new cjs.Graphics().p("AwMF3IAArtMAgZAAAIAALtg");
	var mask_graphics_157 = new cjs.Graphics().p("AwMGqIAAtTMAgZAAAIAANTg");
	var mask_graphics_158 = new cjs.Graphics().p("AwMHdIAAu5MAgZAAAIAAO5g");
	var mask_graphics_159 = new cjs.Graphics().p("AwMIQIAAwfMAgZAAAIAAQfg");
	var mask_graphics_160 = new cjs.Graphics().p("AwMJCIAAyDMAgZAAAIAASDg");
	var mask_graphics_161 = new cjs.Graphics().p("AwMJ1IAAzpMAgZAAAIAATpg");
	var mask_graphics_162 = new cjs.Graphics().p("AwMKoIAA1PMAgZAAAIAAVPg");
	var mask_graphics_163 = new cjs.Graphics().p("AwMLbIAA21MAgZAAAIAAW1g");
	var mask_graphics_164 = new cjs.Graphics().p("AwMMOIAA4bMAgZAAAIAAYbg");
	var mask_graphics_165 = new cjs.Graphics().p("AwMNAIAA5/MAgZAAAIAAZ/g");
	var mask_graphics_166 = new cjs.Graphics().p("AwMNzIAA7lMAgZAAAIAAblg");
	var mask_graphics_167 = new cjs.Graphics().p("AwMOmIAA9LMAgZAAAIAAdLg");
	var mask_graphics_168 = new cjs.Graphics().p("AwMPZIAA+xMAgZAAAIAAexg");
	var mask_graphics_169 = new cjs.Graphics().p("AwMQMMAAAggXMAgZAAAMAAAAgXg");
	var mask_graphics_170 = new cjs.Graphics().p("AwMQ/MAAAgh9MAgZAAAMAAAAh9g");
	var mask_graphics_171 = new cjs.Graphics().p("AwMRxMAAAgjhMAgZAAAMAAAAjhg");
	var mask_graphics_172 = new cjs.Graphics().p("AwMSkMAAAglHMAgZAAAMAAAAlHg");
	var mask_graphics_173 = new cjs.Graphics().p("AwMTXMAAAgmtMAgZAAAMAAAAmtg");
	var mask_graphics_174 = new cjs.Graphics().p("AwMUKMAAAgoTMAgZAAAMAAAAoTg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(149).to({graphics:mask_graphics_149,x:309.8,y:341.1}).wait(1).to({graphics:mask_graphics_150,x:309.8,y:346.2}).wait(1).to({graphics:mask_graphics_151,x:309.8,y:351.3}).wait(1).to({graphics:mask_graphics_152,x:309.8,y:356.3}).wait(1).to({graphics:mask_graphics_153,x:309.8,y:361.4}).wait(1).to({graphics:mask_graphics_154,x:309.8,y:366.5}).wait(1).to({graphics:mask_graphics_155,x:309.8,y:371.6}).wait(1).to({graphics:mask_graphics_156,x:309.8,y:376.7}).wait(1).to({graphics:mask_graphics_157,x:309.8,y:381.7}).wait(1).to({graphics:mask_graphics_158,x:309.8,y:386.8}).wait(1).to({graphics:mask_graphics_159,x:309.8,y:391.9}).wait(1).to({graphics:mask_graphics_160,x:309.8,y:397}).wait(1).to({graphics:mask_graphics_161,x:309.8,y:402.1}).wait(1).to({graphics:mask_graphics_162,x:309.8,y:407.2}).wait(1).to({graphics:mask_graphics_163,x:309.8,y:412.2}).wait(1).to({graphics:mask_graphics_164,x:309.8,y:417.3}).wait(1).to({graphics:mask_graphics_165,x:309.8,y:422.4}).wait(1).to({graphics:mask_graphics_166,x:309.8,y:427.5}).wait(1).to({graphics:mask_graphics_167,x:309.8,y:432.6}).wait(1).to({graphics:mask_graphics_168,x:309.8,y:437.6}).wait(1).to({graphics:mask_graphics_169,x:309.8,y:442.7}).wait(1).to({graphics:mask_graphics_170,x:309.8,y:447.8}).wait(1).to({graphics:mask_graphics_171,x:309.8,y:452.9}).wait(1).to({graphics:mask_graphics_172,x:309.8,y:458}).wait(1).to({graphics:mask_graphics_173,x:309.8,y:463}).wait(1).to({graphics:mask_graphics_174,x:309.8,y:468.1}).wait(26).to({graphics:null,x:0,y:0}).wait(1251));

	// Layer 29
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AF/y1QCGFLAAGCQAAMQoqIsQjdDdkCCF");
	this.shape.setTransform(317.8,470.7);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},149).to({state:[]},51).to({state:[]},50).wait(1201));

	// p2-1
	this.instance_71 = new lib.p21_1();
	this.instance_71.setTransform(320,1515,1,1,0,0,0,320,505);
	this.instance_71._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_71).wait(100).to({_off:false},0).to({y:505},49,cjs.Ease.get(1)).wait(51).to({y:-506.8},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(1201));

	// p1-6
	this.instance_72 = new lib.p16_1();
	this.instance_72.setTransform(719.6,947,1.5,1.5,0,0,0,198,42);
	this.instance_72.alpha = 0;
	this.instance_72._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_72).wait(71).to({_off:false},0).to({scaleX:1,scaleY:1,x:399.5,y:819.2,alpha:1},21,cjs.Ease.get(1)).wait(8).to({y:-230.6},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(1301));

	// p1-5
	this.instance_73 = new lib.p15_1();
	this.instance_73.setTransform(815.1,864.5,1.5,1.5,0,0,0,102.5,17.5);
	this.instance_73.alpha = 0;
	this.instance_73._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_73).wait(65).to({_off:false},0).to({scaleX:1,scaleY:1,x:495,y:736.7,alpha:1},19,cjs.Ease.get(1)).wait(16).to({y:-353.1},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(1301));

	// p1-2
	this.instance_74 = new lib.p12_1();
	this.instance_74.setTransform(-33.6,1117.8,0.265,0.265,75,0,0,202.8,185.1);
	this.instance_74._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_74).wait(14).to({_off:false},0).to({regX:203,regY:185,scaleX:1,scaleY:1,rotation:0,x:505.1,y:505.6},31,cjs.Ease.get(1)).wait(55).to({y:-664.2},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(1301));

	// p1-4
	this.instance_75 = new lib.p14_1();
	this.instance_75.setTransform(265,385.1,1,1,0,0,0,215.5,17.5);
	this.instance_75.alpha = 0;
	this.instance_75._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_75).wait(45).to({_off:false},0).to({y:305.1,alpha:1},14,cjs.Ease.get(1)).wait(41).to({y:-944.7},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(1301));

	// p1-3
	this.instance_76 = new lib.p13_1();
	this.instance_76.setTransform(221,293.1,1,1,0,0,0,171.5,51.5);
	this.instance_76.alpha = 0;
	this.instance_76._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_76).wait(35).to({_off:false},0).to({y:213.1,alpha:1},14,cjs.Ease.get(1)).wait(51).to({y:-1116.7},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(1301));

	// a2
	this.instance_77 = new lib.arrow1mc();
	this.instance_77.setTransform(43,854.2,1,1,0,0,0,43,43.5);
	this.instance_77._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_77).wait(36).to({_off:false},0).wait(64).to({y:-155.6},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(1301));

	// a1
	this.instance_78 = new lib.arrow1mc();
	this.instance_78.setTransform(43,854.2,1,1,0,0,0,43,43.5);
	this.instance_78._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_78).wait(24).to({_off:false},0).wait(76).to({y:-155.6},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(1301));

	// p1-1
	this.instance_79 = new lib.p11_1();
	this.instance_79.setTransform(320,505,1.5,1.5,0,0,0,320,505);
	this.instance_79.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_79).to({scaleX:1,scaleY:1,alpha:1},24,cjs.Ease.get(1)).wait(76).to({y:-504.8},49,cjs.Ease.get(-0.99)).to({_off:true},1).wait(1301));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159.9,-252.4,960,1515);


// symbols:
(lib.arrow1 = function() {
	this.initialize(img.arrow1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,87);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,94);


(lib.p11 = function() {
	this.initialize(img.p11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1010);


(lib.p12 = function() {
	this.initialize(img.p12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,406,370);


(lib.p13 = function() {
	this.initialize(img.p13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,343,103);


(lib.p14 = function() {
	this.initialize(img.p14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,431,35);


(lib.p15 = function() {
	this.initialize(img.p15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,205,35);


(lib.p16 = function() {
	this.initialize(img.p16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,396,84);


(lib.p21 = function() {
	this.initialize(img.p21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1010);


(lib.p210 = function() {
	this.initialize(img.p210);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,153);


(lib.p211 = function() {
	this.initialize(img.p211);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,151);


(lib.p212 = function() {
	this.initialize(img.p212);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,470,24);


(lib.p22 = function() {
	this.initialize(img.p22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,279,280);


(lib.p23 = function() {
	this.initialize(img.p23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,358,57);


(lib.p24 = function() {
	this.initialize(img.p24);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,161,68);


(lib.p25 = function() {
	this.initialize(img.p25);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,232,42);


(lib.p26 = function() {
	this.initialize(img.p26);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,20);


(lib.p27 = function() {
	this.initialize(img.p27);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,154);


(lib.p28 = function() {
	this.initialize(img.p28);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,77,154);


(lib.p29 = function() {
	this.initialize(img.p29);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,154);


(lib.p31 = function() {
	this.initialize(img.p31);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1010);


(lib.p310 = function() {
	this.initialize(img.p310);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,273,124);


(lib.p32 = function() {
	this.initialize(img.p32);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,338,338);


(lib.p33 = function() {
	this.initialize(img.p33);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,203,187);


(lib.p34 = function() {
	this.initialize(img.p34);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,80);


(lib.p35 = function() {
	this.initialize(img.p35);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,175,210);


(lib.p36 = function() {
	this.initialize(img.p36);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,313,81);


(lib.p37 = function() {
	this.initialize(img.p37);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,295,82);


(lib.p38 = function() {
	this.initialize(img.p38);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,459,186);


(lib.p39 = function() {
	this.initialize(img.p39);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,83);


(lib.p41 = function() {
	this.initialize(img.p41);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1010);


(lib.p410 = function() {
	this.initialize(img.p410);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,155,84);


(lib.p411 = function() {
	this.initialize(img.p411);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,178,91);


(lib.p412 = function() {
	this.initialize(img.p412);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,179,108);


(lib.p42 = function() {
	this.initialize(img.p42);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,473,58);


(lib.p43 = function() {
	this.initialize(img.p43);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,248,247);


(lib.p44 = function() {
	this.initialize(img.p44);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,41);


(lib.p45 = function() {
	this.initialize(img.p45);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,22);


(lib.p46 = function() {
	this.initialize(img.p46);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,22);


(lib.p47 = function() {
	this.initialize(img.p47);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,54);


(lib.p48 = function() {
	this.initialize(img.p48);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,199,58);


(lib.p49 = function() {
	this.initialize(img.p49);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,162,107);


(lib.p51 = function() {
	this.initialize(img.p51);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1010);


(lib.p52 = function() {
	this.initialize(img.p52);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,252,252);


(lib.p53 = function() {
	this.initialize(img.p53);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,461,59);


(lib.p54 = function() {
	this.initialize(img.p54);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,392,308);


(lib.p61 = function() {
	this.initialize(img.p61);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1010);


(lib.p62 = function() {
	this.initialize(img.p62);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,387,386);


(lib.p63 = function() {
	this.initialize(img.p63);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,398,119);


(lib.p64 = function() {
	this.initialize(img.p64);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,34);


(lib.p65 = function() {
	this.initialize(img.p65);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,121,34);


(lib.p66 = function() {
	this.initialize(img.p66);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,34);


(lib.p67 = function() {
	this.initialize(img.p67);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,34);


(lib.p71 = function() {
	this.initialize(img.p71);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1010);


(lib.p72 = function() {
	this.initialize(img.p72);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,359,58);


(lib.p73 = function() {
	this.initialize(img.p73);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,206,75);


(lib.p81 = function() {
	this.initialize(img.p81);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1010);


(lib.p82 = function() {
	this.initialize(img.p82);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,355,57);


(lib.p83 = function() {
	this.initialize(img.p83);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,467,46);


(lib.p84 = function() {
	this.initialize(img.p84);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,64);


(lib.p85 = function() {
	this.initialize(img.p85);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,64);


(lib.p91 = function() {
	this.initialize(img.p91);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1010);


(lib.p95 = function() {
	this.initialize(img.p95);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,458,377);


(lib.p96 = function() {
	this.initialize(img.p96);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1010);


(lib.p97 = function() {
	this.initialize(img.p97);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,393,422);


(lib.yuan1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF474D").s().p("AgeAfQgOgNAAgSQAAgRAOgOQANgNARAAQASAAAOANQANAOAAARQAAASgNANQgOAOgSAAQgRAAgNgOg");
	this.shape.setTransform(4.5,4.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,9,9);


(lib.yuan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIAKQgFgEAAgGQAAgFAFgDQADgFAFAAQAGAAAEAFQADADAAAFQAAAGgDAEQgEADgGAAQgFAAgDgDg");
	this.shape.setTransform(7,7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_1.setTransform(7,7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIg");
	this.shape_2.setTransform(7,7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape_3.setTransform(7,7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgcAdQgMgMAAgRQAAgQAMgMQAMgMAQAAQARAAAMAMQAMAMAAAQQAAARgMAMQgMAMgRAAQgQAAgMgMg");
	this.shape_4.setTransform(7,7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghAiQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATQAAAUgOAOQgOAOgUAAQgTAAgOgOg");
	this.shape_5.setTransform(7,7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmAnQgQgRAAgWQAAgVAQgRQARgQAVAAQAWAAARAQQAQARAAAVQAAAWgQARQgRAQgWAAQgVAAgRgQg");
	this.shape_6.setTransform(7,7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgqAsQgSgTAAgZQAAgYASgSQASgSAYAAQAZAAATASQASASAAAYQAAAZgSATQgTASgZAAQgYAAgSgSg");
	this.shape_7.setTransform(7,7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgvAwQgUgUAAgcQAAgbAUgUQAUgUAbAAQAcAAAUAUQAUAUAAAbQAAAcgUAUQgUAUgcAAQgbAAgUgUg");
	this.shape_8.setTransform(7,7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_9.setTransform(7,7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag5A6QgYgYAAgiQAAghAYgYQAYgYAhAAQAiAAAYAYQAYAYAAAhQAAAigYAYQgYAYgiAAQghAAgYgYg");
	this.shape_10.setTransform(7,7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag+A/QgagaAAglQAAgkAagaQAagaAkAAQAlAAAaAaQAaAaAAAkQAAAlgaAaQgaAaglAAQgkAAgagag");
	this.shape_11.setTransform(7,7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhDBEQgcgdAAgnQAAgmAcgdQAdgcAmAAQAnAAAdAcQAcAdAAAmQAAAngcAdQgdAcgnAAQgmAAgdgcg");
	this.shape_12.setTransform(7,7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhIBJQgegfAAgqQAAgpAegfQAfgeApAAQAqAAAfAeQAeAfAAApQAAAqgeAfQgfAegqAAQgpAAgfgeg");
	this.shape_13.setTransform(7,7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgwAxQgVgVAAgcQAAgcAVgUQAUgVAcAAQAcAAAVAVQAUAUABAcQgBAcgUAVQgVAUgcABQgcgBgUgUg");
	this.shape_14.setTransform(7,7,1.571,1.571);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.2,-3.2,20.6,20.6);


(lib.p82_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p82();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,355,57);


(lib.p81_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p81();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1010);


(lib.p73_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p73();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,206,75);


(lib.p72_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p72();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,359,58);


(lib.p71_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p71();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1010);


(lib.p67_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p67();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,122,34);


(lib.p66_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p66();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,101,34);


(lib.p65_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p65();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,121,34);


(lib.p64_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p64();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,101,34);


(lib.p63_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p63();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,398,119);


(lib.p62_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p62();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,387,386);


(lib.p61_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p61();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1010);


(lib.p54_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p54();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,392,308);


(lib.p53_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p53();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,461,59);


(lib.p52_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p52();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,252,252);


(lib.p51_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p51();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1010);


(lib.p412_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p412();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,179,108);


(lib.p411_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p411();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,178,91);


(lib.p410_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p410();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,155,84);


(lib.p49_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p49();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,162,107);


(lib.p48_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p48();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,199,58);


(lib.p47_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p47();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,148,54);


(lib.p46_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p46();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,124,22);


(lib.p45_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p45();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,124,22);


(lib.p44_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p44();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,41,41);


(lib.p43_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p43();
	this.instance.setTransform(-124.4,-122.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-124.4,-122.2,248,247);


(lib.p42_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p42();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,473,58);


(lib.p41_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p41();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1010);


(lib.p310_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p310();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,273,124);


(lib.p39_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p39();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,268,83);


(lib.p38_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p38();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,459,186);


(lib.p37_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p37();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,295,82);


(lib.p36_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p36();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,313,81);


(lib.p35_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p35();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,175,210);


(lib.p34_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p34();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,320,80);


(lib.p33_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p33();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,203,187);


(lib.p32_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p32();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,338,338);


(lib.p31_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p31();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1010);


(lib.p212_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p212();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,470,24);


(lib.p211_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p211();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,66,151);


(lib.p210_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p210();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,68,153);


(lib.p29_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p29();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,72,154);


(lib.p28_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p28();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,77,154);


(lib.p27_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p27();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,88,154);


(lib.p26_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p26();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,250,20);


(lib.p25_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p25();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,232,42);


(lib.p24_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p24();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,161,68);


(lib.p23_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p23();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,358,57);


(lib.p22_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p22();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,279,280);


(lib.p21_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p21();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1010);


(lib.p16_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p16();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,396,84);


(lib.p15_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p15();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,205,35);


(lib.p14_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p14();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,431,35);


(lib.p13_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p13();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,343,103);


(lib.p11_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p11();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1010);


(lib.line2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AF/y2QCGFLAAGDQAAMQoqIsQjdDdkCCG");
	this.shape.setTransform(51.8,120.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,103.6,241.4);


(lib.line = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,93.1).s().p("AuhARIAAghIdDAAIAAAhg");
	this.shape.setTransform(93,1.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,186.1,3.5);


(lib.daan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("EAoogG3MhRPAAAQiWAAAACWIAAJDQAACWCWAAMBRPAAAQCWAAAAiWIAApDQAAiWiWAAg");
	this.shape.setTransform(275,44);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,71,77,0.498)").s().p("EgomAG4QiWgBgBiWIAApBQABiWCWgBMBRNAAAQCXABgBCWIAAJBQABCWiXABg");
	this.shape_1.setTransform(275,44);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF474D").s().rr(-275,-44,550,88,15);
	this.shape_2.setTransform(275,44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,550,88);


(lib.con = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,71,77,0)").s().p("Egx/BO5MAAAidyMBj+AAAMAAACdyg");
	this.shape.setTransform(320,505);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1010);


(lib.btnsubmitinfo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("请赐予我们您的信息", "30px Hiragino Sans GB W3", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.setTransform(203,27.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0081FF").ss(1,1,1).p("Adjm3Mg7FAAAQhtAAAACWIAAJDQAACWBtAAMA7FAAAQBtAAAAiWIAApDQAAiWhtAAg");
	this.shape.setTransform(200,44);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,104,195,0.498)").s().p("A9iG4QhsgBgBiWIAApBQABiWBsgBMA7EAAAQBtABAACWIAAJBQAACWhtABg");
	this.shape_1.setTransform(200,44);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,71,77,0.498)").s().p("A9iG4QhsgBgBiWIAApBQABiWBsgBMA7EAAAQBtABAACWIAAJBQAACWhtABg");
	this.shape_2.setTransform(200,44);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,71,77,0.498)").s().p("EgomAG4QiWgBgBiWIAApBQABiWCWgBMBRNAAAQCXABgBCWIAAJBQABCWiXABg");
	this.shape_3.setTransform(200,44,0.727,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_2},{t:this.text}]},1).to({state:[{t:this.shape_3}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,88);


(lib.btnreplay2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("返回重玩", "30px Hiragino Sans GB W3", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.setTransform(203,27.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0081FF").ss(1,1,1).p("Adjm3Mg7FAAAQhtAAAACWIAAJDQAACWBtAAMA7FAAAQBtAAAAiWIAApDQAAiWhtAAg");
	this.shape.setTransform(200,44);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,104,195,0.498)").s().p("A9iG4QhsgBgBiWIAApBQABiWBsgBMA7EAAAQBtABAACWIAAJBQAACWhtABg");
	this.shape_1.setTransform(200,44);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,71,77,0.498)").s().p("A9iG4QhsgBgBiWIAApBQABiWBsgBMA7EAAAQBtABAACWIAAJBQAACWhtABg");
	this.shape_2.setTransform(200,44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_2},{t:this.text}]},1).to({state:[{t:this.shape_2}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,88);


(lib.btnreplay1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.p84();

	this.instance_1 = new lib.p85();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,148,64);


(lib.btnplay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AnAHAQi5i5AAkHQAAkFC5i7QC7i5EFAAQEHAAC5C5QC6C7AAEFQAAEHi6C5Qi5C6kHAAQkFAAi7i6g");
	this.shape.setTransform(63.5,63.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.arrow1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.arrow1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,86,87);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0)").ss(4,1,1).p("AiqhTICpCnAACBUICpin");
	this.shape.setTransform(17.2,-1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(4,1,1).p("AiqhTICpCnAACBUICpin");
	this.shape_1.setTransform(17.2,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{y:-1.4}}]}).to({state:[{t:this.shape_1,p:{y:-0.3}}]},1).to({state:[{t:this.shape_1,p:{y:0.7}}]},1).to({state:[{t:this.shape_1,p:{y:1.8}}]},1).to({state:[{t:this.shape_1,p:{y:2.9}}]},1).to({state:[{t:this.shape_1,p:{y:4}}]},1).to({state:[{t:this.shape_1,p:{y:5.1}}]},1).to({state:[{t:this.shape_1,p:{y:6.3}}]},1).to({state:[{t:this.shape_1,p:{y:7.4}}]},1).to({state:[{t:this.shape_1,p:{y:8.5}}]},1).to({state:[{t:this.shape_1,p:{y:9}}]},1).to({state:[{t:this.shape_1,p:{y:9.5}}]},1).to({state:[{t:this.shape_1,p:{y:10}}]},1).to({state:[{t:this.shape_1,p:{y:10.5}}]},1).to({state:[{t:this.shape_1,p:{y:11}}]},1).to({state:[{t:this.shape_1,p:{y:11.5}}]},1).to({state:[{t:this.shape_1,p:{y:12}}]},1).to({state:[{t:this.shape_1,p:{y:12.5}}]},1).to({state:[{t:this.shape_1,p:{y:13}}]},1).to({state:[{t:this.shape_1,p:{y:13.5}}]},1).to({state:[{t:this.shape_1,p:{y:14}}]},1).to({state:[{t:this.shape_1,p:{y:14.5}}]},1).to({state:[{t:this.shape_1,p:{y:15}}]},1).to({state:[{t:this.shape_1,p:{y:15.5}}]},1).to({state:[{t:this.shape_1,p:{y:16}}]},1).to({state:[{t:this.shape_1,p:{y:16.5}}]},1).to({state:[{t:this.shape_1,p:{y:17}}]},1).to({state:[{t:this.shape_1,p:{y:17.5}}]},1).to({state:[{t:this.shape_1,p:{y:18}}]},1).to({state:[{t:this.shape,p:{y:18.5}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-9.9,34.4,25.9);


(lib.target = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.p43_1("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.4,-122.2,248,247);


(lib.pzhongjiang3 = function() {
	this.initialize();

	// Layer 1
	this.btn_replay = new lib.btnreplay2();
	this.btn_replay.setTransform(120,640.2);
	new cjs.ButtonHelper(this.btn_replay, 0, 1, 2, false, new lib.btnreplay2(), 3);

	this.instance = new lib.p96();

	this.addChild(this.instance,this.btn_replay);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1010);


(lib.pzhongjiang2 = function() {
	this.initialize();

	// Layer 1
	this.btn_submit_info = new lib.btnsubmitinfo();
	this.btn_submit_info.setTransform(120,640.2);
	new cjs.ButtonHelper(this.btn_submit_info, 0, 1, 2, false, new lib.btnsubmitinfo(), 3);

	this.instance = new lib.p97();
	this.instance.setTransform(126.5,134.1);

	this.instance_1 = new lib.p91();

	this.addChild(this.instance_1,this.instance,this.btn_submit_info);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1010);


(lib.pzhongjiang1 = function() {
	this.initialize();

	// Layer 1
	this.btn_submit_info = new lib.btnsubmitinfo();
	this.btn_submit_info.setTransform(120,640.2);
	new cjs.ButtonHelper(this.btn_submit_info, 0, 1, 2, false, new lib.btnsubmitinfo(), 3);

	this.instance = new lib.p95();
	this.instance.setTransform(126.5,192.6);

	this.instance_1 = new lib.p91();

	this.addChild(this.instance_1,this.instance,this.btn_submit_info);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1010);


(lib.map = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// p6-6
	this.instance = new lib.p66_1();
	this.instance.setTransform(133.6,89.1,0.5,0.5,0,0,0,50.5,17);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},9,cjs.Ease.get(1)).wait(132));

	// p6-5
	this.instance_1 = new lib.p65_1();
	this.instance_1.setTransform(274.6,63.1,0.5,0.5,0,0,0,60.5,17);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(47).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},9,cjs.Ease.get(1)).wait(124));

	// p6-4
	this.instance_2 = new lib.p64_1();
	this.instance_2.setTransform(111.6,24.1,0.5,0.5,0,0,0,50.4,17);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(56).to({_off:false},0).to({regX:50.5,scaleX:1,scaleY:1,alpha:1},9,cjs.Ease.get(1)).wait(115));

	// p6-7
	this.instance_3 = new lib.p67_1();
	this.instance_3.setTransform(169.1,180.1,0.5,0.5,0,0,0,61,17);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},10,cjs.Ease.get(1)).wait(141));

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AglAZIAlgyIAmAzg");
	this.shape.setTransform(249.8,175.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgrAdIArg6IAsA7g");
	this.shape_1.setTransform(249.8,175.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgyAiIAyhDIAzBDg");
	this.shape_2.setTransform(249.8,175.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag4AmIA4hLIA5BLg");
	this.shape_3.setTransform(249.8,175.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag+AqIA+hTIA/BTg");
	this.shape_4.setTransform(249.8,175.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhEAuIBEhcIBFBdg");
	this.shape_5.setTransform(249.8,175.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhLAyIBLhkIBMBlg");
	this.shape_6.setTransform(249.8,175.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhRA2IBRhsIBSBtg");
	this.shape_7.setTransform(249.8,175.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhXA7IBXh1IBYB1g");
	this.shape_8.setTransform(249.8,175.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhdA/IBdh9IBeB9g");
	this.shape_9.setTransform(249.8,175.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},20).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(151));

	// Layer 7
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgbAcQgLgLAAgRQAAgPALgMQAMgMAPAAQAQAAALAMQAMAMABAPQgBARgMALQgLALgQAAQgPAAgMgLg");
	this.shape_10.setTransform(200.1,92.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgfAgQgNgNAAgTQAAgRANgOQANgNASAAQASAAANANQAOAOAAARQAAATgOANQgNANgSAAQgSAAgNgNg");
	this.shape_11.setTransform(200.1,92.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgjAkQgPgPAAgVQAAgUAPgPQAPgPAUAAQAVAAAOAPQAQAPAAAUQAAAVgQAPQgOAPgVAAQgUAAgPgPg");
	this.shape_12.setTransform(200.1,92.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgnAoQgQgRAAgXQAAgWAQgRQARgQAWAAQAXAAAQAQQARARAAAWQAAAXgRARQgQAQgXAAQgWAAgRgQg");
	this.shape_13.setTransform(200.1,92.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgrAsQgSgSAAgaQAAgYASgTQASgSAZAAQAZAAASASQATATAAAYQAAAagTASQgSASgZAAQgZAAgSgSg");
	this.shape_14.setTransform(200.1,92.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgvAvQgTgTAAgcQAAgbATgUQAUgTAbAAQAcAAATATQAUAUAAAbQAAAcgUATQgTAUgcAAQgbAAgUgUg");
	this.shape_15.setTransform(200.1,92.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgzAzQgVgVAAgeQAAgdAVgWQAWgVAdAAQAeAAAVAVQAWAWAAAdQAAAegWAVQgVAWgeAAQgdAAgWgWg");
	this.shape_16.setTransform(200.1,92.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag3A3QgWgXAAggQAAgfAWgYQAYgWAfAAQAgAAAXAWQAXAYAAAfQAAAggXAXQgXAXggAAQgfAAgYgXg");
	this.shape_17.setTransform(200.1,92.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAYAYQAZAZAAAiQAAAjgZAYQgYAZgjAAQgiAAgZgZg");
	this.shape_18.setTransform(200.1,92.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag/A/QgagaAAglQAAgkAagaQAbgaAkAAQAlAAAaAaQAaAaAAAkQAAAlgaAaQgaAaglABQgkgBgbgag");
	this.shape_19.setTransform(200.1,92.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10}]},29).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).wait(142));

	// Layer 8
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgbAcQgMgMAAgQQAAgPAMgMQAMgMAPAAQAQAAAMAMQALAMAAAPQAAAQgLAMQgMALgQAAQgPAAgMgLg");
	this.shape_20.setTransform(187.1,55.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgfAgQgNgNAAgTQAAgRANgOQAOgNARAAQASAAAOANQANAOAAARQAAATgNANQgOANgSAAQgRAAgOgNg");
	this.shape_21.setTransform(187.1,55.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgjAkQgPgPAAgVQAAgUAPgPQAPgPAUAAQAVAAAPAPQAPAPAAAUQAAAVgPAPQgPAPgVAAQgUAAgPgPg");
	this.shape_22.setTransform(187.1,55.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgnAoQgQgRAAgXQAAgWAQgRQARgQAWAAQAXAAARAQQAQARAAAWQAAAXgQARQgRAQgXAAQgWAAgRgQg");
	this.shape_23.setTransform(187.1,55.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgrAsQgSgSAAgaQAAgYASgTQATgSAYAAQAZAAATASQASATAAAYQAAAagSASQgTASgZAAQgYAAgTgSg");
	this.shape_24.setTransform(187.1,55.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgvAvQgTgTAAgcQAAgbATgUQAUgTAbAAQAcAAATATQAUAUAAAbQAAAcgUATQgTAUgcAAQgbAAgUgUg");
	this.shape_25.setTransform(187.1,55.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgzAzQgVgVAAgeQAAgdAVgWQAWgVAdAAQAeAAAVAVQAWAWAAAdQAAAegWAVQgVAWgeAAQgdAAgWgWg");
	this.shape_26.setTransform(187.1,55.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag3A3QgWgXAAggQAAgfAWgYQAYgWAfAAQAgAAAXAWQAXAYAAAfQAAAggXAXQgXAXggAAQgfAAgYgXg");
	this.shape_27.setTransform(187.1,55.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAYAYQAZAZAAAiQAAAjgZAYQgYAZgjAAQgiAAgZgZg");
	this.shape_28.setTransform(187.1,55.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Ag+A/QgagaAAglQAAgkAagaQAagaAkAAQAlAAAaAaQAaAaABAkQgBAlgaAaQgaAbglAAQgkAAgagbg");
	this.shape_29.setTransform(187.1,55.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_20}]},38).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).wait(133));

	// Layer 9
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgbAcQgLgMAAgQQAAgPALgMQAMgMAPAAQAQAAALAMQAMAMABAPQgBAQgMAMQgLALgQABQgPgBgMgLg");
	this.shape_30.setTransform(182.1,26.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgfAfQgNgNAAgSQAAgSANgNQANgNASAAQASAAANANQAOANAAASQAAASgOANQgNAOgSAAQgSAAgNgOg");
	this.shape_31.setTransform(182.1,26.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgjAjQgPgOAAgVQAAgUAPgPQAPgPAUAAQAVAAAOAPQAQAPAAAUQAAAVgQAOQgOAQgVAAQgUAAgPgQg");
	this.shape_32.setTransform(182.1,26.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgnAnQgQgQAAgXQAAgWAQgRQARgQAWAAQAXAAAQAQQARARAAAWQAAAXgRAQQgQARgXAAQgWAAgRgRg");
	this.shape_33.setTransform(182.1,26.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgrArQgSgSAAgZQAAgZASgSQASgSAZAAQAZAAASASQATASAAAZQAAAZgTASQgSATgZAAQgZAAgSgTg");
	this.shape_34.setTransform(182.1,26.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgvAvQgTgTAAgcQAAgbATgUQAUgTAbAAQAcAAATATQAUAUAAAbQAAAcgUATQgTAUgcAAQgbAAgUgUg");
	this.shape_35.setTransform(182.1,26.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgzAzQgVgVAAgeQAAgdAVgWQAWgVAdAAQAeAAAVAVQAWAWAAAdQAAAegWAVQgVAWgeAAQgdAAgWgWg");
	this.shape_36.setTransform(182.1,26.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("Ag3A3QgWgXAAggQAAgfAWgYQAYgWAfAAQAgAAAXAWQAXAYAAAfQAAAggXAXQgXAXggAAQgfAAgYgXg");
	this.shape_37.setTransform(182.1,26.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAYAYQAZAZAAAiQAAAjgZAYQgYAZgjAAQgiAAgZgZg");
	this.shape_38.setTransform(182.1,26.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("Ag/A/QgagaAAglQAAgkAagbQAbgaAkAAQAlAAAaAaQAaAbAAAkQAAAlgaAaQgaAaglAAQgkAAgbgag");
	this.shape_39.setTransform(182.1,26.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_30}]},47).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).wait(124));

	// p6-2
	this.instance_4 = new lib.p62_1();
	this.instance_4.setTransform(193.5,193,1.726,1.726,0,0,0,193.5,193);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:0.94,scaleY:0.94,alpha:0.488},20,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},9).wait(151));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140.3,-140,667.9,666.1);


(lib.line1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.line();
	this.instance.setTransform(93,1.7,1,1,0,0,0,93,1.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:163,alpha:1},9).to({x:213,alpha:0},10).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,186.1,3.5);


(lib.f9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1));

	// Layer 3
	this.text = new cjs.Text("YOGA 平板2", "30px Hiragino Sans GB W3", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.setTransform(318,557);

	this.text_1 = new cjs.Text("YOGA  3  pro", "30px Hiragino Sans GB W3", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 32;
	this.text_1.setTransform(318,436.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).to({state:[]},1).wait(1));

	// Layer 1
	this.d2 = new lib.daan();
	this.d2.setTransform(320,574.1,1,1,0,0,0,275,44);
	new cjs.ButtonHelper(this.d2, 0, 1, 2, false, new lib.daan(), 3);

	this.text_2 = new cjs.Text("回答问题即可参与抽奖", "30px Hiragino Sans GB W3", "#FFFFFF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 32;
	this.text_2.setTransform(318,867.8);

	this.d1 = new lib.daan();
	this.d1.setTransform(320,454.1,1,1,0,0,0,275,44);
	new cjs.ButtonHelper(this.d1, 0, 1, 2, false, new lib.daan(), 3);

	this.text_3 = new cjs.Text("以下哪台设备是使用的\nIntel最新的酷睿M系类芯片?", "40px Hiragino Sans GB W3", "#FFFFFF");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 44;
	this.text_3.setTransform(315.2,239.3);

	this.btn_replay = new lib.btnreplay1();
	this.btn_replay.setTransform(308.1,583.1,1,1,0,0,0,74,32);
	new cjs.ButtonHelper(this.btn_replay, 0, 1, 2, false, new lib.btnreplay1(), 3);

	this.instance = new lib.p83();
	this.instance.setTransform(87.6,446.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_3},{t:this.d1},{t:this.text_2,p:{x:318,y:867.8,text:"回答问题即可参与抽奖",font:"30px Hiragino Sans GB W3",lineHeight:32,lineWidth:300}},{t:this.d2}]}).to({state:[{t:this.text_2,p:{x:315.2,y:239.3,text:"全球最大的半导体企业是?",font:"40px Hiragino Sans GB W3",lineHeight:42,lineWidth:463}},{t:this.instance},{t:this.btn_replay}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(45,239.3,550,677.6);


(lib.f8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1));

	// Layer 3
	this.text = new cjs.Text("酷睿i7", "30px Hiragino Sans GB W3", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.setTransform(318,517);

	this.text_1 = new cjs.Text("酷睿M系列", "30px Hiragino Sans GB W3", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 32;
	this.text_1.setTransform(318,396.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).to({state:[]},1).wait(1));

	// Layer 1
	this.d2 = new lib.daan();
	this.d2.setTransform(320,534.1,1,1,0,0,0,275,44);
	new cjs.ButtonHelper(this.d2, 0, 1, 2, false, new lib.daan(), 3);

	this.text_2 = new cjs.Text("回答问题即可参与抽奖", "30px Hiragino Sans GB W3", "#FFFFFF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 32;
	this.text_2.setTransform(318,867.8);

	this.d1 = new lib.daan();
	this.d1.setTransform(320,414.1,1,1,0,0,0,275,44);
	new cjs.ButtonHelper(this.d1, 0, 1, 2, false, new lib.daan(), 3);

	this.text_3 = new cjs.Text("Intel最新推出的芯片是?", "40px Hiragino Sans GB W3", "#FFFFFF");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 42;
	this.text_3.setTransform(315.2,239.3);

	this.btn_replay = new lib.btnreplay1();
	this.btn_replay.setTransform(308.1,583.1,1,1,0,0,0,74,32);
	new cjs.ButtonHelper(this.btn_replay, 0, 1, 2, false, new lib.btnreplay1(), 3);

	this.instance = new lib.p83();
	this.instance.setTransform(87.6,446.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_3},{t:this.d1},{t:this.text_2,p:{x:318,y:867.8,text:"回答问题即可参与抽奖",font:"30px Hiragino Sans GB W3",lineHeight:32,lineWidth:300}},{t:this.d2}]}).to({state:[{t:this.text_2,p:{x:315.2,y:239.3,text:"全球最大的半导体企业是?",font:"40px Hiragino Sans GB W3",lineHeight:42,lineWidth:463}},{t:this.instance},{t:this.btn_replay}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(45,239.3,550,677.6);


(lib.f7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1));

	// Layer 3
	this.text = new cjs.Text("第10位", "30px Hiragino Sans GB W3", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.setTransform(318,557);

	this.text_1 = new cjs.Text("第6位", "30px Hiragino Sans GB W3", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 32;
	this.text_1.setTransform(318,436.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).to({state:[]},1).wait(1));

	// Layer 1
	this.d2 = new lib.daan();
	this.d2.setTransform(320,574.1,1,1,0,0,0,275,44);
	new cjs.ButtonHelper(this.d2, 0, 1, 2, false, new lib.daan(), 3);

	this.text_2 = new cjs.Text("回答问题即可参与抽奖", "30px Hiragino Sans GB W3", "#FFFFFF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 32;
	this.text_2.setTransform(318,867.8);

	this.d1 = new lib.daan();
	this.d1.setTransform(320,454.1,1,1,0,0,0,275,44);
	new cjs.ButtonHelper(this.d1, 0, 1, 2, false, new lib.daan(), 3);

	this.text_3 = new cjs.Text("英特尔品牌在福布斯榜上\n排第几位?", "40px Hiragino Sans GB W3", "#FFFFFF");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 44;
	this.text_3.setTransform(315.2,239.3);

	this.btn_replay = new lib.btnreplay1();
	this.btn_replay.setTransform(308.1,583.1,1,1,0,0,0,74,32);
	new cjs.ButtonHelper(this.btn_replay, 0, 1, 2, false, new lib.btnreplay1(), 3);

	this.instance = new lib.p83();
	this.instance.setTransform(87.6,446.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_3},{t:this.d1},{t:this.text_2,p:{x:318,y:867.8,text:"回答问题即可参与抽奖",font:"30px Hiragino Sans GB W3",lineHeight:32,lineWidth:300}},{t:this.d2}]}).to({state:[{t:this.text_2,p:{x:315.2,y:239.3,text:"全球最大的半导体企业是?",font:"40px Hiragino Sans GB W3",lineHeight:42,lineWidth:463}},{t:this.instance},{t:this.btn_replay}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(45,239.3,550,677.6);


(lib.f6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1));

	// Layer 3
	this.text = new cjs.Text("内布拉斯加州林肯", "30px Hiragino Sans GB W3", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.setTransform(318,557);

	this.text_1 = new cjs.Text("加利福尼亚州硅谷", "30px Hiragino Sans GB W3", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 32;
	this.text_1.setTransform(318,436.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).to({state:[]},1).wait(1));

	// Layer 1
	this.d2 = new lib.daan();
	this.d2.setTransform(320,574.1,1,1,0,0,0,275,44);
	new cjs.ButtonHelper(this.d2, 0, 1, 2, false, new lib.daan(), 3);

	this.text_2 = new cjs.Text("回答问题即可参与抽奖", "30px Hiragino Sans GB W3", "#FFFFFF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 32;
	this.text_2.setTransform(318,867.8);

	this.d1 = new lib.daan();
	this.d1.setTransform(320,454.1,1,1,0,0,0,275,44);
	new cjs.ButtonHelper(this.d1, 0, 1, 2, false, new lib.daan(), 3);

	this.text_3 = new cjs.Text("Intel公司总部位于\n美国的那个地方?", "40px Hiragino Sans GB W3", "#FFFFFF");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 44;
	this.text_3.setTransform(315.2,239.3);

	this.btn_replay = new lib.btnreplay1();
	this.btn_replay.setTransform(308.1,583.1,1,1,0,0,0,74,32);
	new cjs.ButtonHelper(this.btn_replay, 0, 1, 2, false, new lib.btnreplay1(), 3);

	this.instance = new lib.p83();
	this.instance.setTransform(87.6,446.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_3},{t:this.d1},{t:this.text_2,p:{x:318,y:867.8,text:"回答问题即可参与抽奖",font:"30px Hiragino Sans GB W3",lineHeight:32,lineWidth:300}},{t:this.d2}]}).to({state:[{t:this.text_2,p:{x:315.2,y:239.3,text:"全球最大的半导体企业是?",font:"40px Hiragino Sans GB W3",lineHeight:42,lineWidth:463}},{t:this.instance},{t:this.btn_replay}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(45,239.3,550,677.6);


(lib.f5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1));

	// Layer 3
	this.text = new cjs.Text("2011年", "30px Hiragino Sans GB W3", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.setTransform(318,677);

	this.text_1 = new cjs.Text("2014年", "30px Hiragino Sans GB W3", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 32;
	this.text_1.setTransform(318,557);

	this.text_2 = new cjs.Text("2013年", "30px Hiragino Sans GB W3", "#FFFFFF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 32;
	this.text_2.setTransform(318,436.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_2},{t:this.text_1},{t:this.text}]}).to({state:[]},1).wait(1));

	// Layer 1
	this.d3 = new lib.daan();
	this.d3.setTransform(320,694.1,1,1,0,0,0,275,44);
	new cjs.ButtonHelper(this.d3, 0, 1, 2, false, new lib.daan(), 3);

	this.d2 = new lib.daan();
	this.d2.setTransform(320,574.1,1,1,0,0,0,275,44);
	new cjs.ButtonHelper(this.d2, 0, 1, 2, false, new lib.daan(), 3);

	this.text_3 = new cjs.Text("回答问题即可参与抽奖", "30px Hiragino Sans GB W3", "#FFFFFF");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 32;
	this.text_3.setTransform(318,867.8);

	this.d1 = new lib.daan();
	this.d1.setTransform(320,454.1,1,1,0,0,0,275,44);
	new cjs.ButtonHelper(this.d1, 0, 1, 2, false, new lib.daan(), 3);

	this.text_4 = new cjs.Text("intel在何时研发出了\n14纳米级别的芯片?", "40px Hiragino Sans GB W3", "#FFFFFF");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 44;
	this.text_4.setTransform(315.2,239.3);

	this.btn_replay = new lib.btnreplay1();
	this.btn_replay.setTransform(308.1,583.1,1,1,0,0,0,74,32);
	new cjs.ButtonHelper(this.btn_replay, 0, 1, 2, false, new lib.btnreplay1(), 3);

	this.instance = new lib.p83();
	this.instance.setTransform(87.6,446.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_4},{t:this.d1},{t:this.text_3,p:{x:318,y:867.8,text:"回答问题即可参与抽奖",font:"30px Hiragino Sans GB W3",lineHeight:32,lineWidth:300}},{t:this.d2},{t:this.d3}]}).to({state:[{t:this.text_3,p:{x:315.2,y:239.3,text:"全球最大的半导体企业是?",font:"40px Hiragino Sans GB W3",lineHeight:42,lineWidth:463}},{t:this.instance},{t:this.btn_replay}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(45,239.3,550,677.6);


(lib.f4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1));

	// Layer 3
	this.text = new cjs.Text("罗伯特·诺伊斯", "30px Hiragino Sans GB W3", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.setTransform(318,677);

	this.text_1 = new cjs.Text("布莱恩·科兹安尼克", "30px Hiragino Sans GB W3", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 32;
	this.text_1.setTransform(318,557);

	this.text_2 = new cjs.Text("戈登·摩尔   ", "30px Hiragino Sans GB W3", "#FFFFFF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 32;
	this.text_2.setTransform(318,436.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_2},{t:this.text_1},{t:this.text}]}).to({state:[]},1).wait(1));

	// Layer 1
	this.d3 = new lib.daan();
	this.d3.setTransform(320,694.1,1,1,0,0,0,275,44);
	new cjs.ButtonHelper(this.d3, 0, 1, 2, false, new lib.daan(), 3);

	this.d2 = new lib.daan();
	this.d2.setTransform(320,574.1,1,1,0,0,0,275,44);
	new cjs.ButtonHelper(this.d2, 0, 1, 2, false, new lib.daan(), 3);

	this.text_3 = new cjs.Text("回答问题即可参与抽奖", "30px Hiragino Sans GB W3", "#FFFFFF");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 32;
	this.text_3.setTransform(318,867.8);

	this.d1 = new lib.daan();
	this.d1.setTransform(320,454.1,1,1,0,0,0,275,44);
	new cjs.ButtonHelper(this.d1, 0, 1, 2, false, new lib.daan(), 3);

	this.text_4 = new cjs.Text("摩尔定律是由谁提出，\n并得到验证的?", "40px Hiragino Sans GB W3", "#FFFFFF");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 44;
	this.text_4.setTransform(315.2,239.3);

	this.btn_replay = new lib.btnreplay1();
	this.btn_replay.setTransform(308.1,583.1,1,1,0,0,0,74,32);
	new cjs.ButtonHelper(this.btn_replay, 0, 1, 2, false, new lib.btnreplay1(), 3);

	this.instance = new lib.p83();
	this.instance.setTransform(87.6,446.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_4},{t:this.d1},{t:this.text_3,p:{x:318,y:867.8,text:"回答问题即可参与抽奖",font:"30px Hiragino Sans GB W3",lineHeight:32,lineWidth:300}},{t:this.d2},{t:this.d3}]}).to({state:[{t:this.text_3,p:{x:315.2,y:239.3,text:"全球最大的半导体企业是?",font:"40px Hiragino Sans GB W3",lineHeight:42,lineWidth:463}},{t:this.instance},{t:this.btn_replay}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(45,239.3,550,677.6);


(lib.f3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1));

	// Layer 3
	this.text = new cjs.Text("罗伯特·诺伊斯、布莱恩·科兹安尼克", "30px Hiragino Sans GB W3", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.setTransform(318,517);

	this.text_1 = new cjs.Text("罗伯特·诺伊斯、戈登·摩尔", "30px Hiragino Sans GB W3", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 32;
	this.text_1.setTransform(318,396.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).to({state:[]},1).wait(1));

	// Layer 1
	this.d2 = new lib.daan();
	this.d2.setTransform(320,534.1,1,1,0,0,0,275,44);
	new cjs.ButtonHelper(this.d2, 0, 1, 2, false, new lib.daan(), 3);

	this.text_2 = new cjs.Text("回答问题即可参与抽奖", "30px Hiragino Sans GB W3", "#FFFFFF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 32;
	this.text_2.setTransform(318,867.8);

	this.d1 = new lib.daan();
	this.d1.setTransform(320,414.1,1,1,0,0,0,275,44);
	new cjs.ButtonHelper(this.d1, 0, 1, 2, false, new lib.daan(), 3);

	this.text_3 = new cjs.Text("英特尔公司是由谁创立的?", "40px Hiragino Sans GB W3", "#FFFFFF");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 42;
	this.text_3.setTransform(315.2,239.3);

	this.btn_replay = new lib.btnreplay1();
	this.btn_replay.setTransform(308.1,583.1,1,1,0,0,0,74,32);
	new cjs.ButtonHelper(this.btn_replay, 0, 1, 2, false, new lib.btnreplay1(), 3);

	this.instance = new lib.p83();
	this.instance.setTransform(87.6,446.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_3},{t:this.d1},{t:this.text_2,p:{x:318,y:867.8,text:"回答问题即可参与抽奖",font:"30px Hiragino Sans GB W3",lineHeight:32,lineWidth:300}},{t:this.d2}]}).to({state:[{t:this.text_2,p:{x:315.2,y:239.3,text:"全球最大的半导体企业是?",font:"40px Hiragino Sans GB W3",lineHeight:42,lineWidth:463}},{t:this.instance},{t:this.btn_replay}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(45,239.3,550,677.6);


(lib.f2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1));

	// Layer 3
	this.text = new cjs.Text("1868", "30px Hiragino Sans GB W3", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.setTransform(318,637);

	this.text_1 = new cjs.Text("1899", "30px Hiragino Sans GB W3", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 32;
	this.text_1.setTransform(318,517);

	this.text_2 = new cjs.Text("1896", "30px Hiragino Sans GB W3", "#FFFFFF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 32;
	this.text_2.setTransform(318,396.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_2},{t:this.text_1},{t:this.text}]}).to({state:[]},1).wait(1));

	// Layer 1
	this.d3 = new lib.daan();
	this.d3.setTransform(320,654.1,1,1,0,0,0,275,44);
	new cjs.ButtonHelper(this.d3, 0, 1, 2, false, new lib.daan(), 3);

	this.d2 = new lib.daan();
	this.d2.setTransform(320,534.1,1,1,0,0,0,275,44);
	new cjs.ButtonHelper(this.d2, 0, 1, 2, false, new lib.daan(), 3);

	this.text_3 = new cjs.Text("回答问题即可参与抽奖", "30px Hiragino Sans GB W3", "#FFFFFF");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 32;
	this.text_3.setTransform(318,867.8);

	this.d1 = new lib.daan();
	this.d1.setTransform(320,414.1,1,1,0,0,0,275,44);
	new cjs.ButtonHelper(this.d1, 0, 1, 2, false, new lib.daan(), 3);

	this.text_4 = new cjs.Text("英特尔公司成立时间", "40px Hiragino Sans GB W3", "#FFFFFF");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 42;
	this.text_4.setTransform(315.2,239.3);

	this.btn_replay = new lib.btnreplay1();
	this.btn_replay.setTransform(308.1,583.1,1,1,0,0,0,74,32);
	new cjs.ButtonHelper(this.btn_replay, 0, 1, 2, false, new lib.btnreplay1(), 3);

	this.instance = new lib.p83();
	this.instance.setTransform(87.6,446.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_4},{t:this.d1},{t:this.text_3,p:{x:318,y:867.8,text:"回答问题即可参与抽奖",font:"30px Hiragino Sans GB W3",lineHeight:32,lineWidth:300}},{t:this.d2},{t:this.d3}]}).to({state:[{t:this.text_3,p:{x:315.2,y:239.3,text:"全球最大的半导体企业是?",font:"40px Hiragino Sans GB W3",lineHeight:42,lineWidth:463}},{t:this.instance},{t:this.btn_replay}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(45,239.3,550,677.6);


(lib.f1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1));

	// Layer 3
	this.text = new cjs.Text("东芝", "30px Hiragino Sans GB W3", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.setTransform(318,637);

	this.text_1 = new cjs.Text("三星", "30px Hiragino Sans GB W3", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 32;
	this.text_1.setTransform(318,517);

	this.text_2 = new cjs.Text("英特尔", "30px Hiragino Sans GB W3", "#FFFFFF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 32;
	this.text_2.setTransform(318,396.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_2},{t:this.text_1},{t:this.text}]}).to({state:[]},1).wait(1));

	// Layer 1
	this.d3 = new lib.daan();
	this.d3.setTransform(320,654.1,1,1,0,0,0,275,44);
	new cjs.ButtonHelper(this.d3, 0, 1, 2, false, new lib.daan(), 3);

	this.d2 = new lib.daan();
	this.d2.setTransform(320,534.1,1,1,0,0,0,275,44);
	new cjs.ButtonHelper(this.d2, 0, 1, 2, false, new lib.daan(), 3);

	this.text_3 = new cjs.Text("回答问题即可参与抽奖", "30px Hiragino Sans GB W3", "#FFFFFF");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 32;
	this.text_3.setTransform(318,867.8);

	this.d1 = new lib.daan();
	this.d1.setTransform(320,414.1,1,1,0,0,0,275,44);
	new cjs.ButtonHelper(this.d1, 0, 1, 2, false, new lib.daan(), 3);

	this.text_4 = new cjs.Text("全球最大的半导体企业是?", "40px Hiragino Sans GB W3", "#FFFFFF");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 42;
	this.text_4.setTransform(315.2,239.3);

	this.btn_replay = new lib.btnreplay1();
	this.btn_replay.setTransform(308.1,583.1,1,1,0,0,0,74,32);
	new cjs.ButtonHelper(this.btn_replay, 0, 1, 2, false, new lib.btnreplay1(), 3);

	this.instance = new lib.p83();
	this.instance.setTransform(87.6,446.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_4},{t:this.d1},{t:this.text_3,p:{x:318,y:867.8,text:"回答问题即可参与抽奖",font:"30px Hiragino Sans GB W3",lineHeight:32,lineWidth:300}},{t:this.d2},{t:this.d3}]}).to({state:[{t:this.text_3,p:{x:315.2,y:239.3,text:"全球最大的半导体企业是?",font:"40px Hiragino Sans GB W3",lineHeight:42,lineWidth:463}},{t:this.instance},{t:this.btn_replay}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(45,239.3,550,677.6);


(lib.arrow1mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arrow1_1();
	this.instance.setTransform(-42.9,121.6,1,1,0,0,0,43,43.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:228,y:-147.8,alpha:1},9,cjs.Ease.get(-0.99)).to({x:683,y:-600.4,alpha:0},15,cjs.Ease.get(1)).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.9,78.1,86,87);


(lib.p12_1 = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.line1();
	this.instance.setTransform(40.4,175.3,1,1,70.2,0,0,93,1.7);

	// Layer 2
	this.instance_1 = new lib.line1();
	this.instance_1.setTransform(180.5,317.4,1,1,-25.1,0,0,93.1,1.8);

	// Layer 1
	this.instance_2 = new lib.p12();

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,406,370);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;