document.querySelector('#check').addEventListener('click', check)

function check() {
    
    const birthday = document.querySelector('#birthMonth').value
    const bMonth= birthday.toLowerCase()
    const bDay = document.querySelector('#birthday').value
    if (bMonth == 1 || bMonth== 'january' && bDay <= 19){
        document.querySelector('#placeToSee').innerText = 'Capricorn'
        document.querySelector('#placeToRead').innerText = 'Smart, hardworking, and fully in control of their destiny, Capricorn signs will always get what they set their mind to, in both personal and professional life—no excuses. Capricorns may get a reputation as stubborn, but they simply know what they want, and also know how they wish other people would behave.'
    } else if ((bMonth == 1 || bMonth== 'january'&& bDay <=31) || (bMonth == 2 || bMonth=='february'&& bDay <=18)) {
        document.querySelector('#placeToSee').innerText = 'Aquarius'
        document.querySelector('#placeToRead').innerText = 'Independent and enigmatical, Aquarians are unique. There is no one quite like an Aquarius, and because each is so incredibly individual, it can be tough to describe them as a group. Aquarians don\'t like labels, and may shy away from any adjective—even the good ones you might bestow upon them. Aquarians believe in the nature of change and evolution, and even though they\'re a fixed sign, they may not necessarily believe they are the "same" people they were when they were born.'
    } else if ((bMonth == 2 || bMonth=='february'&& bDay <=28) || (bMonth == 3 || bMonth=='march'&& bDay <=20)){
        document.querySelector('#placeToSee').innerText = 'Pisces'
        document.querySelector('#placeToRead').innerText = 'Smart, creative, and deeply intuitive, Pisces can be close to psychic. Pisces feel things deeply, and have incredibly strong gut reactions. A Pisces "knows" things from deep within, and can often judge whether a person or situation is good or bad. That doesn\'t mean a Pisces ignores the logical part of their brain, though. Deeply intelligent, Pisces have a profound respect for the power of the human mind. Is it a surprise that Albert Einstein was a Pisces?'
    }else if ((bMonth == 3 || bMonth=='march'&& bDay <=31) || (bMonth == 4 || bMonth=='april'&& bDay <=19)){
        document.querySelector('#placeToSee').innerText = 'Aries'
        document.querySelector('#placeToRead').innerText = 'The first sign of the Zodiac, Aries are the trailblazers. Passionate and independent, Aries will never do something just because everyone else is doing it—a Ram needs to be 100 percent committed to the task at hand. Competitive to the max, the best way to motivate an Aries is to turn something into a contest. Aries will put everything they have (and then some) into winning. Loyal, smart, and impulsive, they always have multiple projects on their mind, and won\'t be satisfied until their work, social life, and personal lives line up exactly with the dream life they\'ve envisioned. Those who are drawn to magnetic Aries may have trouble keeping up—but if they can, they\'ll have a friend for life.'
    }else if ((bMonth == 4 || bMonth=='april'&& bDay <=30) || (bMonth == 5 || bMonth=='may'&& bDay <=20)){
        document.querySelector('#placeToSee').innerText = 'Taurus'
        document.querySelector('#placeToRead').innerText = 'Smart, ambitious, and trustworthy, Taurus is the anchor of the Zodiac. Amazing friends, colleagues, and partners, Taureans value honesty above all else and are proud that their personal relationships tend to be drama free. Bulls get the reputation of being stubborn, but they\'re not always stuck in their ways. This searching sign is willing to see another point of view, but they won\'t flip-flop on an opinion just to make someone else happy. They will shift their thinking only if they truly have a change of heart.'
    }else if ((bMonth == 5 || bMonth=='may'&& bDay <=31) || (bMonth == 6 || bMonth=='june'&& bDay <=20)){
        document.querySelector('#placeToSee').innerText = 'Gemini'
        document.querySelector('#placeToRead').innerText = 'Smart, passionate, and dynamic, Gemini is characterized by the Twins, Castor and Pollux, and is known for having two different sides they can display to the world. Expert communicators, Gemini is the chameleon of the Zodiac, adept at blending into different groups based on the vibe and energy they perceive. While they\'re also amazing at showcasing surface traits, the Gemini well runs deep, which is why the Twins are one of the Zodiac\'s most emotionally intelligent signs.'
    }else if ((bMonth == 6 || bMonth=='june'&& bDay <=30) || (bMonth == 7 || bMonth=='july'&& bDay <=22)){
        document.querySelector('#placeToSee').innerText = 'Cancer'
        document.querySelector('#placeToRead').innerText = 'Emotional, intuitive, and practically psychic; ruled by the moon and characterized by the crab, Cancer has so much going on in its watery depths. Cancer signs may seem prickly and standoffish at first meeting, once they make the decision to become friends with someone, that person has a friend for life.'
    }else if ((bMonth == 7 || bMonth=='july'&& bDay <=31) || (bMonth == 8 || bMonth=='august'&& bDay <=22)){
        document.querySelector('#placeToSee').innerText = 'Leo'
        document.querySelector('#placeToRead').innerText = 'Bold, intelligent, warm, and courageous, fire sign Leo is a natural leader of the Zodiac, ready to blaze a trail, vanquish injustice, and make a name for themselves along the way. Blessed with high self-esteem, Lions know that they possess enviable traits—and they\'re proud of them. They don\'t believe in false modesty and will be the first to praise themselves for a job well done. But Leo isn\'t self-aggrandizing or unwilling to roll up those sleeves and do the work: this sign knows that in order to be respected and admired, he or she needs to put in the effort worthy of a leader.'
    }else if ((bMonth == 8 || bMonth=='august'&& bDay <=30) || (bMonth == 9 || bMonth=='september'&& bDay <=22)){
        document.querySelector('#placeToSee').innerText = 'Virgo'
        document.querySelector('#placeToRead').innerText = 'Virgos expect perfection from themselves, and they may project those high standards on the other people in their life. A Virgo hates when someone lets him or her down, even if it\'s minor and unavoidable, like a last-minute cancellation. Virgo signs never want to disappoint the people in their lives, so they may spread themselves too thin put themselves last.'
    }else if ((bMonth == 9 || bMonth=='september'&& bDay <=30) || (bMonth == 10 || bMonth=='october'&& bDay <=22)){
        document.querySelector('#placeToSee').innerText = 'Libra'
        document.querySelector('#placeToRead').innerText = 'Intelligent, kind, and always willing to put others before themselves, Libras value harmony in all forms. Ruled by Venus, the planet of beauty, Libra adores a life that looks good. As the master of compromise and diplomacy, Libra is adept at seeing all points of view, and excels at crafting compromises and effecting mediation between others. This sign has a rich inner life yet loves other people, and they\'re always happiest with a large group of friends, family, and coworkers on whom they can count.'
    }else if ((bMonth == 10 || bMonth=='october'&& bDay <=31) || (bMonth == 11 || bMonth=='november'&& bDay <=21)){
        document.querySelector('#placeToSee').innerText = 'Scorpio'
        document.querySelector('#placeToRead').innerText = 'So many other signs spend valuable time and energy beating around the bush, desperately trying to find an approach that makes the fewest waves when it comes to confronting a conflict. Not Scorpio. Blessed with a deep sense of self, Scorpio is always able to say exactly what\'s on their mind, even if it\'s not what people want to hear. Scorpio is forthright and honest, and those two characteristics commandeer a ton of respect, both at home and at work.'
    }else if ((bMonth == 11 || bMonth=='november'&& bDay <=30) || (bMonth == 12 || bMonth=='december'&& bDay <=21)){ 
        document.querySelector('#placeToSee').innerText = 'Sagitarrius'
        document.querySelector('#placeToRead').innerText = 'Independent and strong-willed, Sagittarius personalities are all about going off the beaten path. Sagittarius isn\'t afraid to step away from the pack, and is a natural born leader who goes after what he or she wants, regardless of what other people think. Sagittarius is a born adventurer, and loves solo travel and exploration. Sagittarius also loves exploring the inner workings of their minds, and love stretching their horizons through a good book or movie.'
    }else if(bMonth == 12 || bMonth=='december'&& bDay <=31){
        document.querySelector('#placeToSee').innerText = 'Capricorn'
        document.querySelector('#placeToRead').innerText = 'Smart, hardworking, and fully in control of their destiny, Capricorn signs will always get what they set their mind to, in both personal and professional life—no excuses. Capricorns may get a reputation as stubborn, but they simply know what they want, and also know how they wish other people would behave.'
    }else{
      document.querySelector('#placeToSee').innerText = 'Please enter a valid date. Use numbers instead of names of months'
      document.querySelector('#placeToRead').innerText= ''
    }
}