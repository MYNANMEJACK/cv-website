// 添加一些互動效果
document.addEventListener('DOMContentLoaded', function() {
    // 技能標籤點擊效果
    const skillItems = document.querySelectorAll('.skills-list li');
    skillItems.forEach(item => {
        item.addEventListener('click', function() {
            this.style.background = 'rgba(52, 152, 219, 0.6)';
            setTimeout(() => {
                this.style.background = 'rgba(52, 152, 219, 0.2)';
            }, 200);
        });
    });

    // 平滑滾動效果
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideUp 0.6s ease-out';
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // 添加打印功能
    const printButton = document.createElement('button');
    printButton.textContent = '打印簡歷';
    printButton.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #3498db;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
        z-index: 1000;
        transition: background 0.3s ease;
    `;
    
    printButton.addEventListener('mouseover', function() {
        this.style.background = '#2980b9';
    });
    
    printButton.addEventListener('mouseout', function() {
        this.style.background = '#3498db';
    });
    
    printButton.addEventListener('click', function() {
        window.print();
    });
    
    document.body.appendChild(printButton);

    // 添加主題切換功能
    const themeButton = document.createElement('button');
    themeButton.textContent = '切換主題';
    themeButton.style.cssText = `
        position: fixed;
        top: 70px;
        right: 20px;
        background: #34495e;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
        z-index: 1000;
        transition: background 0.3s ease;
    `;
    
    themeButton.addEventListener('click', function() {
        const body = document.body;
        const sidebar = document.querySelector('.sidebar');
        
        if (body.style.background.includes('#667eea')) {
            // 切換到深色主題
            body.style.background = 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)';
            sidebar.style.background = 'linear-gradient(180deg, #1a252f 0%, #2c3e50 100%)';
        } else {
            // 切換回原主題
            body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            sidebar.style.background = 'linear-gradient(180deg, #2c3e50 0%, #34495e 100%)';
        }
    });
    
    document.body.appendChild(themeButton);
}); 