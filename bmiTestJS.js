function findBmi() {
    var heightf = document.getElementById("heightF").value;
    var heighti = document.getElementById("heightI").value;
    var weight = document.getElementById("weight").value;
    var height = +(heightf * 12) + +heighti;
    var results = (weight / (height * height)) * 703;
    var resultsStr = "";
    var treatment = "";
    var underTreatment = "Treatment: Because you are underweight, you will need to eat more calories. The extra calories you \
should be consuming should come mainly from additional carbohydrates. To start, set a realistic goal weight for yourself. Make \
nutrition your priority, and weight gain the second. It is best to gain weight slowly to make sure your weight gain is in the \
form of lean body mass and not fat. Try not to gain more than a 1/2 pound a week. Here are some ways to promote a healthier \
lifestyle: Drink at least 6-8 glasses of water a day. Instead of eating 3 large meals a day, break the meals up and have small \
meals throughout the day. Eat lots of raw fruits and vegetables (green leafy vegetables are great) Do not drink coffee, \
alcohol, or soda,...Do not eat processed foods; white sugar, white flour, Hydrogenated oils, etc. It’s best to avoid red meat \
and animal fats. Reduce intake of dairy products. Do not smoke and try to avoid second-hand smoke.";
    var healthyTreatment = "Treatment: You are doing everything right! Keep doing you and love your body :)";
    var overTreatment = "Treatment: Your body weight is controlled by the number of calories you eat and the number of \
calories you use each day. The idea is that if you consume fewer calories than you burn, you will lose weight. Additionally, \
incorporating exercise into your daily routine will allow you to begin losing weight. You probably won't see a big change \
right away, however your body is changing! Try to make simple and easily achievable goals every month, for example, try to \
become 4-8 pounds less than your current weight this month. Here are some changes that you can start today that will improve \
your chances of weight loss: Cut out red meat. Eliminating red meat can go a long way in helping you make healthier meal \
choices. Start to incorporate more fish and poultry into your meals. Cut out fried foods. Refrain from eating fries, onion \
rings, and other greasy snacks. Practice grilling, roasting, broiling, or boiling your vegetables and meats. Start your meals \
with a soup or salad. When you begin your meals with a soup or salad, it will prevent you from overeating and decrease your \
portion sizes. This way, you are able to have a smaller main course meal. Stop drinking soda! For every 20 ounces of Coke you \
drink, you consume 250 calories which can ruin the amount of calories you are supposed to consume in a day. Drink water :)";
    var obesityTreatment = "Treatment: Treatment depends on your level of obesity, health condition, and motivation to lose \
the excess weight. If you are overweight, losing a few pounds may improve health problems that are often linked to obesity, \
such as high blood pressure and diabetes. Ultimately, the safest way to lose weight is slowly and steadily. You should only be \
losing about 1-2 pounds a week. If you lose weight too fast, you may be losing muscle instead of fat. Decide to make long term \
changes to your diet and exercise to lose your weight and to keep the weight off!! Some changes you can make are to improve \
your eating habits. Begin to eat a variety of foods, like pasta, rice, wholemeal bread, and other whole-grain foods. Try to \
reduce your fat-intake by eating foods that aren’t processed. You should also eat lots of fruits and vegetables. Making \
physical activity a part of your daily life is an important way to help control your weight. Exercise at least 30 minutes a \
day on most days of the week. The exercise activity of your choice does not have to be done all at once. It can be done in \
stages: 10 minutes here, 20 minutes there, providing it adds up to 30 minutes a day.";
    document.getElementById("result").innerHTML = Math.round(results * 100) / 100;
    if (results < 18.5) {
        resultsStr = "Underweight";
        treatment = underTreatment;
    } else if (results >= 18.5 && results <= 24.9) {
        resultsStr = "Healthy";
        treatment = healthyTreatment;
    } else if (results >= 25 && results <= 29.9) {
        resultsStr = "Overweight";
        treatment = overTreatment;
    } else if (results => 30) {
        resultsStr = "Obese";
        treatment = obesityTreatment;
    }
    var noteString = "*Note - These are approxiamtions. Do not base your diet plan on this. This will differ based on what you do, eg. Athlete, woman.\nIf you want a more accurate result, please try our body fat precentage calculator";
    document.getElementById("notesP").innerHTML = noteString;
    document.getElementById("result").innerHTML += " - " + resultsStr;
    document.getElementById("treatment").innerHTML = treatment;
}
