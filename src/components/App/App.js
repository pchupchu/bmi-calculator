import Header from "../Header/Header";
import Main from "../Main/Main";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <p>
        Limitations of BMI Although BMI is often a practical indicator of
        healthy weight, it is not suited for every person. Specific groups
        should carefully consider their BMI outcomes, and in certain cases, the
        measurement may not be beneficial to use. Gender The development and
        body fat composition of girls and boys vary with age. Consequently, a
        child's age and gender are considered when evaluating their BMI. Age In
        aging individuals, increased body fat and muscle loss may cause BMI to
        underestimate body fat content. Muscle BMI may misclassify muscular
        individuals as overweight or obese, as it doesn't differentiate muscle
        from fat. Pregnancy Expectant mothers experience weight gain due to
        their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable
        to minimise health risks for both mother and child. Race Certain health
        concerns may affect individuals of some Black and Asian origins at lower
        BMIs than others. To learn more, it is advised to discuss this with your
        GP or practice nurse.
      </p>
    </div>
  );
}

export default App;
