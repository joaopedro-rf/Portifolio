document.addEventListener('DOMContentLoaded', function () {
    const enTranslation = {
        skillset: "I have a solid foundation in algorithm structure/logic, databases, and OOP. Learning new frameworks and languages is no problem, I'm ready for new challenges",
        description: "DESCRIPTION",
        descriptBody: "A fullstack webapp, created using JAVA, CSS, HTML and Javascript designed to be a Health Clinic's frontpage, you can login and schedule an appointment on the calendar. <br> USER = test@test.com <br> PASSWORD = test",
        why: "WHY",
        whyBody: "My first desktop Java app was a CRUD for a health clinic, you could manage the pacients, medics and appointments. I wanted to revamp that idea and keep working on it.",
        language: "EN",
        headerIntro: "INTRODUCTION",
        headerAbout: "ABOUT ME",
        headerHobbies: "HOBBIES",
        header: "Hello! I'm João Pedro, a fullstack developer.",
        body: "I graduated in computer engineering at INATEL, where I acquired a solid foundation in computer science and algorithms. <br> I am looking for a team where I can demonstrate my skills and contribute to problem-solving, with room for growth.",
        hobbies: "My main hobbies are: <br> - Music, whenever I can, I'm tuned in to Spotify. I learned to play the guitar and piano since I was a child. <br> - Games, since Super Nintendo, and more recently switched from consoles to PC. <br> - Traveling, my goal is to travel and visit as many countries as possible."
    };

    const ptTranslation = {
        skillset: "Tenho uma base solida de estrutura de dados e logica de algoritmos, banco de dados e programacaoo orientada a objetos. Aprender novos frameworks e linguagens nao e um problema, estou disposto a novos desafios.",
        description: "DESCRICAO",
        descriptBody: "Um webapp fullstack, criado usando JAVA, CSS, HTML e Javascript, seu design foi pensado para ser a frontpage de uma clinica medica, você pode fazer o login e agendar uma consulta no calendario <br> USER = test@test.com <br> PASSWORD = test",
        why: "PORQUE",
        whyBody: "Meu primeiro app desktop completo foi criado usando Java, ele foi pensado para ser utilizado em uma clinica medica, um CRUD de pacientes, medicos e consultas. Eu quis continuar desenvolvendo essa ideia e dar uma nova cara pra ela",
        language: "PT",
        headerIntro: "INTRODUCAO",
        headerAbout: "SOBRE MIM",
        headerHobbies: "MEUS HOBBIES",
        header: "Olá! Sou o João Pedro, fullstack developer.",
        body: "Sou formado em engenharia da computação pelo INATEL. Durante minha formação adquiri uma base sólida em fundamentos da computação e algoritmos. <br> Estou em busca de uma equipe onde possa demonstrar minhas habilidades e contribuir para a solução de problemas, onde tenha espaço para crescimento.",
        hobbies: "Meus principais hobbies são: <br> - Música, sempre que posso estou com o Spotify ligado, aprendi desde pequeno a tocar violão e piano. <br> - Jogos, desde a época do Super Nintendo e mais recentemente larguei dos consoles para ficar apenas no PC. <br> - Viajar, minha meta é poder viajar e conhecer o maior número de países possível."
    };

    const elements = {
        description: document.getElementById('description'),
        descriptionBody: document.getElementById('descriptBody'),
        why: document.getElementById('why'),
        whyBody: document.getElementById('whyBody'),
        header: document.getElementById('header'),
        body: document.getElementById('body'),
        hobbies: document.getElementById('hobbies'),
        language: document.getElementById('language'),
        headerIntro: document.getElementById('headerIntro'),
        headerAbout: document.getElementById('headerAbout'),
        headerHobbies: document.getElementById('headerHobbies'),
        switch: document.getElementById('flexSwitchCheckDefault'),
        skillset: document.getElementById('skillset')
    };

    function updateContent(language) {
        const translations = language === 'pt' ? ptTranslation : enTranslation;

        if(elements.skillset){
            elements.skillset.innerHTML = translations.skillset;
        }

        if (elements.header && elements.body && elements.hobbies && elements.headerIntro && elements.headerAbout && elements.headerHobbies) {
            elements.header.innerHTML = translations.header;
            elements.body.innerHTML = translations.body;
            elements.hobbies.innerHTML = translations.hobbies;
            elements.headerIntro.innerHTML = translations.headerIntro;
            elements.headerAbout.innerHTML = translations.headerAbout;
            elements.headerHobbies.innerHTML = translations.headerHobbies;
        }

        if (elements.language) {
            elements.language.innerHTML = translations.language;
        }

        if (elements.description && elements.descriptionBody && elements.why && elements.whyBody) {
            elements.description.innerHTML = translations.description;

            elements.descriptionBody.innerHTML = translations.descriptBody.replace(/(JAVA|CSS|HTML|Javascript)/g, match => `<span style="font-size:1.2em; font-weight: bold;">${match}</span>`);

            elements.why.innerHTML = translations.why;
            elements.whyBody.innerHTML = translations.whyBody;
        }

        localStorage.setItem('language', language);
    }

    if (elements.switch) {
        elements.switch.addEventListener('change', function () {
            const selectedLanguage = this.checked ? 'en' : 'pt';
            updateContent(selectedLanguage);
            localStorage.setItem('language', selectedLanguage);
        });
    }

    const savedLanguage = localStorage.getItem('language') || 'pt';
    if (elements.switch) {
        elements.switch.checked = savedLanguage === 'en';
    }
    updateContent(savedLanguage);
});