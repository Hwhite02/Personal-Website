document.addEventListener("DOMContentLoaded", () => {
    const tlEntries = [
        {
            date: '2017-2018',
            title: 'Mobile Search Reviewer:',
            entries: [
                'Performed 100s of in-depth reviews of mobile search data gathered from 1000s of internet searches.',
                'Utilized search engine optimization knowledge to analyze these search engine results by evaluating and categorizing mobile queries and rating the response.',
                'Provided detailed feedback that informed algorithm adjustments leading to improvements to user search relevancy and experience.'
            ]
        },
        {
            date: '2017-2018',
            title: 'Mobile Search Reviewer:',
            entries: [
                'Provided technical support and onboarding assistance for new employees and interns.',
                'Assisted in development and planning for 3 separate start-ups, apps, and their associated websites.',
                'MooVRoom creative and development teams, helped with the early website design and C# coding.',
                'NemeBeat creative and development teams also helped with HTML and CSS for the early website.',
                'Horreal creative team, implemented some UI designs and helped with feature planning.'
            ]
        },
        {
            date: '2016-2020',
            title: 'Completed Associate Degree in Computer Programming:',
            entries: [
                '3.54 GPA',
                'Cum Laude Honors',
                'Deans List Student'
            ]
        },
        {
            date: '2020-2024',
            title: 'Completed Bachelor of Science in Game Software Development:',
            entries: [
                '3.68 GPA',
                'Cum Laude Honors',
                'Deans List Student'
            ]
        }
    ];

    const projects = [
        {
            title: 'Cyber Security',
            description: 'LFSR Cipher in Python.',
            buttonText: 'Github',
            buttonLink: 'https://github.com/Hwhite02/LFSR_Cipher',
            image: 'assets/lfsr-2.png'
        },
        {
            title: 'Artificial Intelligence',
            description: 'Color Detection Using Pandas and OpenCV Machine Learning with Python. (GitHub coming soon)',
            buttonText: 'Github',
            buttonLink: '',
            image: 'assets/color-1.webp'
        },
        {
            title: 'Data Structures and Algorithms',
            description: 'Balanced Binary Search Tree in Python (GitHub coming soon)',
            buttonText: 'Github',
            buttonLink: '',
            image: 'assets/bbst-1.webp'
        },
        {
            title: 'Game Software Development',
            description: 'Solo Developer of A complete rouge-like Game featuring ~50 manually coded C# scripts, 3d modeling, asset/art creation, animation, etc. (GitHub coming soon)',
            buttonText: 'Github',
            buttonLink: '',
            image: 'assets/gamess.webp'
        }

    ];

    const artwork = [
        {
            title: '3D Modeling',
            description: 'Donut and coffee made in Blender.',
            image: 'assets/donut.webp'
        },
        {
            title: 'Digital Art',
            description: 'Victorian Rabbit Man made in PhotoShop/Illustrator',
            image: 'assets/digital.webp'
        }

    ];

    const tlContainer = document.querySelector('.timeline');

    tlEntries.forEach((entry, index) => {
        const containerDiv = document.createElement('div');
        containerDiv.className = `container ${index % 2 === 0 ? 'right' : 'left'}`;

        const contentDiv = document.createElement('div');
        contentDiv.className = 'content';

        const dateElement = document.createElement('h2');
        dateElement.textContent = entry.date;

        const titleElement = document.createElement('h4');
        titleElement.textContent = entry.title;

        const ulElement = document.createElement('ul');
        entry.entries.forEach(point => {
            const liElement = document.createElement('li');
            liElement.textContent = point;
            ulElement.appendChild(liElement);
        });

        contentDiv.appendChild(dateElement);
        contentDiv.appendChild(titleElement);
        contentDiv.appendChild(ulElement);

        containerDiv.appendChild(contentDiv);
        tlContainer.appendChild(containerDiv);
    });

    const exampleCodeContainer = document.querySelector('.exCode');

    projects.forEach((project, index) => {

        const projectDiv = document.createElement('div');
        projectDiv.className = index % 2 === 0 ? 'exLeft' : 'exRight';
    
        const textContentDiv = document.createElement('div');
        textContentDiv.className = 'textContent';
        textContentDiv.innerHTML = `
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <a href="${project.buttonLink}" target="_blank">${project.buttonText}</a>
        `;

        const imgContentDiv = document.createElement('div');
        imgContentDiv.className = 'imgContent';
        imgContentDiv.innerHTML = `<img src="${project.image}">`;
    
        if (index % 2 === 0) {
            projectDiv.appendChild(textContentDiv);
            projectDiv.appendChild(imgContentDiv);
        } else {
            projectDiv.appendChild(imgContentDiv);
            projectDiv.appendChild(textContentDiv);
        }

        exampleCodeContainer.appendChild(projectDiv);
    });

    const exampleArtContainer = document.querySelector('.exArt');

    artwork.forEach((art, index) => {

        const artDiv = document.createElement('div');
        artDiv.className = index % 2 === 0 ? 'exLeft' : 'exRight';
    
        const textContentDiv = document.createElement('div');
        textContentDiv.className = 'textContent';
        textContentDiv.innerHTML = `
            <h2>${art.title}</h2>
            <p>${art.description}</p>
        `;

        const imgContentDiv = document.createElement('div');
        imgContentDiv.className = 'imgContent';
        imgContentDiv.innerHTML = `<img src="${art.image}">`;
    
        if (index % 2 === 0) {
            artDiv.appendChild(textContentDiv);
            artDiv.appendChild(imgContentDiv);
        } else {
            artDiv.appendChild(imgContentDiv);
            artDiv.appendChild(textContentDiv);
        }

        exampleArtContainer.appendChild(artDiv);
    });
});
