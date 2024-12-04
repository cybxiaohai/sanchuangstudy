document.addEventListener('DOMContentLoaded', function() {
    // 获取所有标签按钮和内容容器
    const tabButtons = document.querySelectorAll('.category-tabs .tab-btn');
    const containers = {
        '叶雕艺术': document.querySelector('.leaf-art-container'),
        '立体纸雕': document.querySelector('.paper-art-container'),
        '传统剪纸': document.querySelector('.paper-cut-container')
    };

    // 标签切换功能
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有按钮的活动状态
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // 隐藏所有容器
            Object.values(containers).forEach(container => {
                if (container) {
                    container.style.display = 'none';
                }
            });
            
            // 激活当前按钮
            this.classList.add('active');
            
            // 显示对应容器
            const containerName = this.textContent;
            if (containers[containerName]) {
                containers[containerName].style.display = 'grid';
            }
        });
    });

    // 初始化显示第一个容器
    containers['叶雕艺术'].style.display = 'grid';

    // 添加图片加载动画
    const artImages = document.querySelectorAll('img');
    artImages.forEach(img => {
        img.classList.add('loading');
        img.onload = function() {
            this.classList.remove('loading');
        }
    });

    // 添加滚动动画
    const artContainers = document.querySelectorAll('.leaf-art-container, .paper-art-container, .paper-cut-container');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    artContainers.forEach(container => {
        container.style.opacity = '0';
        container.style.transform = 'translateY(50px)';
        container.style.transition = 'all 0.8s ease-out';
        observer.observe(container);
    });

    // 添加鼠标跟随水墨效果
    document.querySelectorAll('.leaf-art-image, .paper-art-image, .paper-cut-image, .leaf-art-content p:first-child, .paper-art-content p:first-child, .paper-cut-content p:first-child').forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = e.target.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            element.style.setProperty('--mouse-x', `${x}%`);
            element.style.setProperty('--mouse-y', `${y}%`);
        });
    });
}); 