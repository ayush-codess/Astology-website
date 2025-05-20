document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("astroForm");
    const resultDiv = document.getElementById("result");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const day = parseInt(document.getElementById("day").value);
      const month = parseInt(document.getElementById("month").value);
  
      if (isNaN(day) || isNaN(month)) {
        resultDiv.innerHTML = "<p>Please enter a valid day and month.</p>";
        return;
      }
  
      const zodiac = getZodiacSign(day, month);
      const compliment = getRandom(compliments);
      const victimEnergy = getRandom(victimEnergyCompliments);
      const prediction = getRandom(futurePredictions);
  
      resultDiv.innerHTML = `
        <p><strong>🔯 Zodiac Sign:</strong> ${zodiac}</p>
        <p><strong>💖 Compliment:</strong> ${compliment}</p>
        <p><strong>😩 Victim Energy:</strong> ${victimEnergy}</p>
        <p><strong>🔮 Future Prediction:</strong> ${prediction}</p>
      `;
    });
  
    function getZodiacSign(day, month) {
      if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return "Aquarius ♒";
      if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) return "Pisces ♓";
      if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "Aries ♈";
      if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return "Taurus ♉";
      if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) return "Gemini ♊";
      if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) return "Cancer ♋";
      if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return "Leo ♌";
      if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return "Virgo ♍";
      if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) return "Libra ♎";
      if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) return "Scorpio ♏";
      if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) return "Sagittarius ♐";
      if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) return "Capricorn ♑";
      return "Unknown";
    }
  
    function getRandom(array) {
      return array[Math.floor(Math.random() * array.length)];
    }
  
    const compliments = [
      "You have a heart of gold 💛",
      "Your smile can light up the darkest room 😊",
      "You’re a natural leader and an inspiration to many 🌟",
      "You bring out the best in people 🌈",
      "Your creativity knows no bounds 🎨",
      "You're more amazing than you realize ✨",
      "The world is better with you in it 🌍",
      "You have an incredible sense of humor 😂",
      "You’re strong, inside and out 💪",
      "You always know how to lift others up 💬",
      "You’re glowing with good energy 🔆",
      "You make everything look effortless 🔥",
      "You’re a true original — never change 🦄",
      "You’re the kind of person people admire 🌠",
      "You’re intelligent, thoughtful, and kind 🧠❤️",
      "You’re full of positive surprises 🎁",
      "You're a ray of sunshine on cloudy days ☀️",
      "Your energy is contagious ⚡",
      "You have a beautiful soul 🕊️",
      "You’re incredibly thoughtful and generous 🎁",
      "You make the world a little brighter every day 🌟",
      "You’ve got a great sense of style 😎",
      "You’re wise beyond your years 📚",
      "You make people feel seen and appreciated 👀💖",
      "You’re a joy to be around 🎉",
      "Your inner light shines bright 🌌",
      "You bring calm to the chaos 🧘",
      "You're exactly who you need to be 💫",
      "You’re making a bigger difference than you think 🌱",
      "You radiate kindness and compassion 💕",
      "You’ve got this. And you always will 🚀"
    ];
  
    const victimEnergyCompliments = [
      "You give your whole heart, and people still take you for granted 💔",
      "You always show up for others — even when no one shows up for you 🙃",
      "Your kindness is unmatched, but rarely appreciated 😞",
      "You treat people better than they treat you — every single time 😔",
      "You deserve the same love you keep giving to everyone else 💫",
      "You're loyal to people who wouldn’t even pick you if you were the only option 😓",
      "You put others first, and somehow still end up last 🥀",
      "Your silence hides the pain of always being the one who cares more 😶💔",
      "You remember the little things — they forget you entirely 😢",
      "You're the type to check on others, but no one checks on you 😩",
      "You pour into people who leave you empty 🫗",
      "You give your best to those who only give you the bare minimum 💀",
      "You forgive too much, care too deeply, and get hurt too often 🫠",
      "You're constantly there for others, even when you're falling apart yourself 🤯",
      "You show love in ways no one shows you back 😒",
      "You deserve credit for how often you’ve been the strong one for everyone 🧱",
      "You give your all, and all you get is silence in return 📭",
      "You're the safe space for people who leave you out in the cold ❄️",
      "You’re the person they run to when they’re hurt — but disappear when you need them 🏃‍♂️💨",
      "Your love is a gift people don’t know how to handle 🎁💔"
    ];
  
    const futurePredictions = [
      "You will become a crorepati 💸",
      "Success is chasing you — not the other way around 🏃‍♂️💼",
      "Your dream life is closer than you think 🌈",
      "One day, people will quote your story as motivation 📖✨",
      "Everything you prayed for is already on its way 🙏💫",
      "A massive breakthrough is coming your way 🚀",
      "The money, the peace, the love — it’s all aligning for you soon 💰🕊️❤️",
      "You will soon be living a life you once only dreamed of 🌟",
      "Your glow-up is going to be everyone's favorite plot twist 😎",
      "You're going to travel places you never imagined 🗺️✈️",
      "Your hard work will turn into generational wealth 💼🏠",
      "You're going to fall in love with the best version of your life 💖",
      "Opportunities will come to you like never before 🌠",
      "You're about to level up — mentally, emotionally, and financially 📈",
      "Soon, you’ll be waking up to peace, not alarms ☀️🛌",
      "The life you deserve is already preparing itself for you ✨",
      "Unexpected blessings are headed your way 📦🎁",
      "You’re going to make your family proud one day 👨‍👩‍👧‍👦💫",
      "The universe is conspiring in your favor 🌌",
      "Your name will be known for something great 🏆"
    ];
  });  
