import { CalculatorPage } from "./calculator";
import { TestBed, async } from "@angular/core/testing";
import { IonicModule, Platform, NavController } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { PlatformMock, StatusBarMock, SplashScreenMock, NavControllerMock } from "ionic-mocks";

describe("CalculatorPage", () => {
  let calculator;
  let fixture

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CalculatorPage
      ],
      imports: [IonicModule.forRoot(CalculatorPage)],
      providers: [
        { provide: Platform, useFactory: () => PlatformMock.instance() },
        { provide: StatusBar, useFactory: () => StatusBarMock.instance() },
        { provide: SplashScreen, useFactory: () => SplashScreenMock.instance() },
        { provide: NavController, useFactory: () => NavControllerMock.instance() }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorPage);
    calculator = fixture.componentInstance;
  });

  it("should create the calculator page", () => {
    expect(calculator).toBeTruthy();
    expect(calculator instanceof CalculatorPage).toEqual(true);
  });


  it('should have calculate function', () => {
    spyOn(calculator, 'calculateBMI'); 
     calculator.calculateBMI()
     expect(calculator.calculateBMI).toHaveBeenCalled();
  });

  it('should have function that calculates BMI', () => { 
    calculator.weight = 90
    calculator.height = 187
    calculator.calculateBMI()
    expect(calculator.bmiMessage).toEqual('Overweight');
  });

  it('should set \'Underweight\' as message if bmi < 18.5', () => {
    calculator.bmiValue = 15
    calculator.setBMIMessage()
    expect(calculator.bmiMessage).toEqual("Underweight");
  });

  it('should set \'Normal\' as message if 18.5 < bmi < 25', () => {
    calculator.bmiValue = 19
    calculator.setBMIMessage()
    expect(calculator.bmiMessage).toEqual("Normal");
  });

  it('should set \'Overweight\' as message if 25 < bmi < 30', () => {
    calculator.bmiValue = 26
    calculator.setBMIMessage()
    expect(calculator.bmiMessage).toEqual("Overweight");
  });

  it('should set \'Obese\' as message if bmi > 30', () => {
    calculator.bmiValue = 32
    calculator.setBMIMessage()
    expect(calculator.bmiMessage).toEqual("Obese");
  });
})
