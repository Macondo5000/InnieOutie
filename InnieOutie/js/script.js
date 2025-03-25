// 确保全局变量可用
window.questions = questions;
window.personalityResults = personalityResults;

// 语言切换功能
class LanguageManager {
    constructor() {
        this.currentLang = 'zh';
        this.langToggle = document.getElementById('lang-toggle');
        this.translateElements = document.querySelectorAll('.translate');
        this.bindEvents();
    }

    bindEvents() {
        this.langToggle.addEventListener('click', () => this.toggleLanguage());
    }

    toggleLanguage() {
        this.currentLang = this.currentLang === 'zh' ? 'en' : 'zh';
        this.langToggle.textContent = this.currentLang === 'zh' ? 'EN' : 'CN';
        this.updateContent();
        this.updateImageAlts();
    }

    updateContent() {
        this.translateElements.forEach(element => {
            const text = element.getAttribute(`data-${this.currentLang}`);
            if (text) {
                if (element.tagName.toLowerCase() === 'button') {
                    element.textContent = text;
                } else {
                    element.innerHTML = text;
                }
            }
        });
    }

    updateImageAlts() {
        const images = document.querySelectorAll('img[data-en-alt]');
        images.forEach(img => {
            const altText = img.getAttribute(`data-${this.currentLang}-alt`);
            if (altText) {
                img.alt = altText;
            }
        });
    }
}

class PersonalityTest {
    constructor() {
        this.currentQuestion = 0;
        this.answers = [];
        this.initializeElements();
        this.bindEvents();
    }

    initializeElements() {
        this.welcomeScreen = document.getElementById('welcome-screen');
        this.quizScreen = document.getElementById('quiz-screen');
        this.resultScreen = document.getElementById('result-screen');
        this.startButton = document.getElementById('start-btn');
        this.questionText = document.getElementById('question-text');
        this.optionsContainer = document.getElementById('options-container');
        this.progressBar = document.querySelector('.progress');
    }

    bindEvents() {
        this.startButton.addEventListener('click', () => this.startQuiz());
        // 使用事件委托来处理重新测试按钮
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('restart-btn')) {
                window.location.reload();
            }
        });
    }

    startQuiz() {
        this.welcomeScreen.classList.add('hidden');
        this.quizScreen.classList.remove('hidden');
        this.showQuestion();
    }

    showQuestion() {
        const question = questions[this.currentQuestion];
        this.questionText.textContent = question.question;
        this.optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.textContent = option.text;
            button.addEventListener('click', () => this.handleAnswer(option.type));
            this.optionsContainer.appendChild(button);
        });

        this.updateProgress();
    }

    handleAnswer(type) {
        this.answers.push(type);
        
        if (this.currentQuestion < questions.length - 1) {
            this.currentQuestion++;
            this.showQuestion();
        } else {
            this.showResult();
        }
    }

    updateProgress() {
        const progress = ((this.currentQuestion + 1) / questions.length) * 100;
        this.progressBar.style.width = `${progress}%`;
    }

    calculateResult() {
        const counts = {
            INNIE: 0,
            BALANCED: 0,
            OUTIE: 0
        };
        
        this.answers.forEach(type => counts[type]++);
        
        const maxCount = Math.max(...Object.values(counts));
        return Object.keys(counts).find(key => counts[key] === maxCount);
    }

    showResult() {
        const resultType = this.calculateResult();
        const result = personalityResults[resultType];

        this.quizScreen.classList.add('hidden');
        this.resultScreen.classList.remove('hidden');

        const resultHTML = `
            <div class="result-container ${resultType.toLowerCase()}">
                <img src="images/lumon-logo-white.png" alt="卢蒙公司" class="result-logo" />
                <h2 class="result-title typewriter-text">${result.title}</h2>
                <p class="result-subtitle">${result.subtitle}</p>
                ${result.warning ? `<p class="warning-text">${result.warning}</p>` : ''}

                <div class="result-content">
                    <div class="traits-section">
                        <h3>人格特征：</h3>
                        <ul>
                            ${result.traits.map(trait => `<li>${trait}</li>`).join('')}
                        </ul>
                    </div>

                    <div class="recommendations-section">
                        <h3>${resultType === 'INNIE' ? '公司推荐岗位：' : 
                             resultType === 'OUTIE' ? '强制措施建议：' : 
                             '仁慈方案：'}</h3>
                        <ul>
                            ${(result.recommendedPositions || result.mandatoryMeasures || result.mercifulSolutions)
                                .map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>

                    <div class="company-suggestions">
                        <h3>公司建议：</h3>
                        <ul>
                            ${result.recommendations.map(rec => `<li>${rec}</li>`).join('')}
                        </ul>
                    </div>
                </div>

                <button class="lumon-btn restart-btn">
                    重新测试
                </button>
            </div>
        `;

        this.resultScreen.innerHTML = resultHTML;
        this.animateResult();
    }

    animateResult() {
        const elements = this.resultScreen.querySelectorAll('.result-content > div');
        elements.forEach((element, index) => {
            element.style.animation = `fadeIn 0.5s ease forwards ${index * 0.3}s`;
        });
    }
}

// 初始化测试
document.addEventListener('DOMContentLoaded', () => {
    new PersonalityTest();
    new LanguageManager();
});