import gender from "../images/icon-gender.svg";
import age from "../images/icon-age.svg";
import muscle from "../images/icon-muscle.svg";
import pregnancy from "../images/icon-pregnancy.svg";
import race from "../images/icon-race.svg";

const limitations = [
  {
    id: 1,
    title: "Gender",
    image: gender,
    text: "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.",
  },
  {
    id: 2,
    title: "Age",
    image: age,
    text: "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.",
  },
  {
    id: 3,
    title: "Muscle",
    image: muscle,
    text: "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.",
  },
  {
    id: 4,
    title: "Pregnancy",
    image: pregnancy,
    text: "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.",
  },
  {
    id: 5,
    title: "Race",
    image: race,
    text: "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.",
  },
];

export default limitations;
