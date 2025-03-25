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
    
    // 添加重新测试按钮的事件监听
    const restartBtn = this.resultScreen.querySelector('.restart-btn');
    if (restartBtn) {
        restartBtn.addEventListener('click', () => {
            window.location.reload();
        });
    }
} 