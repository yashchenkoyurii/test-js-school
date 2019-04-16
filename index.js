const params = {
    lines: [
        {
           background: '#00F',
           updateTime: 1000,
           elements: [
                {
                    background: '#10F',
                    width: 25
                },
                {
                    background: '#20F',
                    width: 25
                },
                {
                    background: '#30F',
                    width: 50
                }
            ]     
        },
        {
            background: '#00C',
            updateTime: 2000,
            elements: [
                {
                    background: '#10C',
                    width: 25
                },
                {
                    background: '#20C',
                    width: 25
                },
                {
                    background: '#30C',
                    width: 50
                }
            ]
        },
        {
            background: '#00B',
            updateTime: 3000,
            elements: [
                {
                    background: '#10B',
                    width: 50
                },
                {
                    background: '#20B',
                    width: 25
                },
                {
                    background: '#30B',
                    width: 25
                }
            ]
        }
    ]
};

const lineCount = params.lines.length;
const color = () => "#"+((1<<24)*Math.random()|0).toString(16);

params.lines.forEach((line) => {
    const app = document.querySelector('#app');

    const lineNode = document.createElement('div');
    lineNode.setAttribute('style', `height: ${100/lineCount}%; background-color: ${line.background}`);
    
    line.elements.forEach((element) => {
        const elementNode = document.createElement('div');

        elementNode.setAttribute('style', `height: 100%; opacity: 0.5; width: ${element.width}%; background-color: ${element.background}`);
        lineNode.appendChild(elementNode);
    });

    setInterval(() => lineNode.style.backgroundColor = color(), line.updateTime);
    app.appendChild(lineNode);
});