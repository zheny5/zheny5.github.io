// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 移动端菜单切换
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // 如果是移动端，点击菜单项后关闭菜单
                if (window.innerWidth < 768) {
                    mobileMenu.classList.add('hidden');
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // 减去导航栏高度
                    behavior: 'smooth'
                });
            }
        });
    });

    // 项目模态框
    const projectModal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const closeModal = document.getElementById('close-modal');
    
    // 关闭模态框
    closeModal.addEventListener('click', function() {
        projectModal.classList.add('hidden');
        document.body.style.overflow = 'auto'; // 恢复滚动
    });
    
    // 点击模态框外部关闭
    projectModal.addEventListener('click', function(e) {
        if (e.target === projectModal) {
            projectModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    });

    // 技能雷达图
    const skillsRadar = document.getElementById('skills-radar');
    if (skillsRadar) {
        const skillsChart = new Chart(skillsRadar, {
            type: 'radar',
            data: {
                labels: ['算法设计', '机器学习', '计算机视觉', '全栈开发', '教育技术', '项目管理'],
                datasets: [{
                    label: '技能水平',
                    data: [95, 90, 85, 80, 95, 85],
                    backgroundColor: 'rgba(37, 99, 235, 0.2)',
                    borderColor: 'rgba(37, 99, 235, 0.8)',
                    pointBackgroundColor: 'rgba(37, 99, 235, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(37, 99, 235, 1)'
                }]
            },
            options: {
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            stepSize: 20
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }

    // 教学成果图表 - 成绩分布对比
    const gradesChart = document.getElementById('grades-chart');
    if (gradesChart) {
        new Chart(gradesChart, {
            type: 'bar',
            data: {
                labels: ['A', 'B', 'C', 'D', 'F'],
                datasets: [
                    {
                        label: '改进前',
                        data: [15, 25, 30, 20, 10],
                        backgroundColor: 'rgba(156, 163, 175, 0.7)'
                    },
                    {
                        label: '改进后',
                        data: [40, 35, 15, 8, 2],
                        backgroundColor: 'rgba(37, 99, 235, 0.7)'
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: false
                    }
                }
            }
        });
    }

    // 学生能力提升雷达图
    const improvementRadar = document.getElementById('improvement-radar');
    if (improvementRadar) {
        new Chart(improvementRadar, {
            type: 'radar',
            data: {
                labels: ['算法思维', '编程技能', '问题分析', '团队协作', '创新能力', '学习主动性'],
                datasets: [
                    {
                        label: '课程前',
                        data: [30, 40, 35, 50, 45, 40],
                        backgroundColor: 'rgba(156, 163, 175, 0.2)',
                        borderColor: 'rgba(156, 163, 175, 0.8)',
                    },
                    {
                        label: '课程后',
                        data: [80, 85, 75, 70, 75, 90],
                        backgroundColor: 'rgba(37, 99, 235, 0.2)',
                        borderColor: 'rgba(37, 99, 235, 0.8)',
                    }
                ]
            },
            options: {
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });
    }

    // 懒加载图片
    const lazyImages = document.querySelectorAll('.lazy-load');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(function(img) {
            imageObserver.observe(img);
        });
    } else {
        // 回退方案
        lazyImages.forEach(function(img) {
            img.classList.add('loaded');
        });
    }

    // 项目详情模态框内容
    window.showProjectModal = function(projectId) {
        const projects = {
            'medical': {
                title: '医疗影像优化系统',
                content: `
                    <div class="mb-6">
                        <img src="https://picsum.photos/800/400?tech=2" alt="医疗影像优化系统" class="w-full h-auto rounded-lg shadow-lg">
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div class="bg-blue-50 p-4 rounded-lg">
                            <h4 class="font-bold text-lg mb-2">技术架构</h4>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>Python + PyTorch</li>
                                <li>整数线性规划</li>
                                <li>共现图算法</li>
                                <li>分布式计算框架</li>
                            </ul>
                        </div>
                        <div class="bg-blue-50 p-4 rounded-lg">
                            <h4 class="font-bold text-lg mb-2">主要创新</h4>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>共现图优化</li>
                                <li>医学图像降噪</li>
                                <li>自适应分割算法</li>
                                <li>医学知识图谱融合</li>
                            </ul>
                        </div>
                        <div class="bg-blue-50 p-4 rounded-lg">
                            <h4 class="font-bold text-lg mb-2">应用成果</h4>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>诊断效率提升35%</li>
                                <li>珠海三甲医院部署</li>
                                <li>识别准确率达98.7%</li>
                                <li>处理速度提升60%</li>
                            </ul>
                        </div>
                    </div>
                    <div class="mb-6">
                        <h4 class="font-bold text-lg mb-2">项目描述</h4>
                        <p class="text-gray-700 mb-4">
                            医疗影像优化系统是一个基于共现图和整数线性规划的医学图像处理平台。该系统针对医疗影像中的噪声干扰和图像分割难题，
                            开发了一套创新的算法框架，显著提高了医学图像的处理质量和速度。
                        </p>
                        <p class="text-gray-700">
                            系统已成功部署在珠海多家三甲医院，帮助医生更高效地分析CT、MRI等医学影像，提高诊断准确率。
                            创新的共现图算法使得系统能够自适应地处理不同类型的医学图像，同时保持高效的计算性能。
                        </p>
                    </div>
                    <div>
                        <h4 class="font-bold text-lg mb-2">数学建模可视化</h4>
                        <div class="bg-gray-100 p-4 rounded-lg">
                            <p class="font-mono text-sm mb-2">// 整数线性规划核心算法</p>
                            <pre class="bg-gray-800 text-white p-3 rounded overflow-x-auto">
function optimizeSegmentation(G, constraints) {
    // 构建共现图G=(V,E)
    const V = extractVertices(image);
    const E = buildEdges(V);
    
    // 定义ILP模型
    const model = {
        objective: minimizeEnergy(E),
        constraints: [
            regionConsistency(V),
            boundaryPreservation(E),
            ...customConstraints
        ]
    };
    
    // 求解ILP得到最优分割
    return solveILP(model);
}</pre>
                        </div>
                    </div>
                `
            },
            'ar': {
                title: '小红书AR引擎',
                content: `
                    <div class="mb-6">
                        <img src="https://picsum.photos/800/400?tech=3" alt="小红书AR引擎" class="w-full h-auto rounded-lg shadow-lg">
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div class="bg-blue-50 p-4 rounded-lg">
                            <h4 class="font-bold text-lg mb-2">技术架构</h4>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>TensorFlow Lite</li>
                                <li>改进UNet架构</li>
                                <li>自注意力机制</li>
                                <li>边缘计算优化</li>
                            </ul>
                        </div>
                        <div class="bg-blue-50 p-4 rounded-lg">
                            <h4 class="font-bold text-lg mb-2">主要创新</h4>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>轻量级注意力模块</li>
                                <li>实时分割算法</li>
                                <li>多目标追踪优化</li>
                                <li>低功耗设备适配</li>
                            </ul>
                        </div>
                        <div class="bg-blue-50 p-4 rounded-lg">
                            <h4 class="font-bold text-lg mb-2">应用成果</h4>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>分割精度提升25%</li>
                                <li>功耗降低40%</li>
                                <li>用户使用时长+35%</li>
                                <li>AR滤镜使用量+60%</li>
                            </ul>
                        </div>
                    </div>
                    <div class="mb-6">
                        <h4 class="font-bold text-lg mb-2">项目描述</h4>
                        <p class="text-gray-700 mb-4">
                            小红书AR引擎是一款面向移动设备的高性能增强现实处理框架。项目重点解决了移动端AR应用中的图像分割精度和性能平衡问题，
                            通过改进UNet架构并引入轻量级注意力机制，在保持低功耗的同时显著提升了分割精度。
                        </p>
                        <p class="text-gray-700">
                            该引擎已成功应用于小红书APP中的多款热门AR滤镜，为数千万用户提供了流畅且精准的AR体验。
                            通过优化的边缘计算策略，即使在中低端手机上也能流畅运行复杂的AR效果。
                        </p>
                    </div>
                    <div>
                        <h4 class="font-bold text-lg mb-2">模型架构</h4>
                        <div class="bg-gray-100 p-4 rounded-lg">
                            <p class="font-mono text-sm mb-2">// 改进的UNet+注意力机制</p>
                            <div class="flex justify-center">
                                <img src="https://picsum.photos/600/300?tech=6" alt="UNet架构图" class="rounded-lg shadow border border-gray-200">
                            </div>
                            <p class="text-sm text-gray-600 mt-2 text-center">改进的UNet架构结合自注意力机制，在编码器和解码器之间添加跳跃连接</p>
                        </div>
                    </div>
                `
            },
            'hdr': {
                title: 'HDR色彩校正模块',
                content: `
                    <div class="mb-6">
                        <img src="https://picsum.photos/800/400?tech=4" alt="HDR色彩校正模块" class="w-full h-auto rounded-lg shadow-lg">
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div class="bg-blue-50 p-4 rounded-lg">
                            <h4 class="font-bold text-lg mb-2">技术架构</h4>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>C++/CUDA加速</li>
                                <li>仿生视觉模型</li>
                                <li>色彩理论优化</li>
                                <li>HDR色域映射</li>
                            </ul>
                        </div>
                        <div class="bg-blue-50 p-4 rounded-lg">
                            <h4 class="font-bold text-lg mb-2">主要创新</h4>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>仿生对比度增强</li>
                                <li>自适应色调映射</li>
                                <li>感知一致性优化</li>
                                <li>计算摄影学应用</li>
                            </ul>
                        </div>
                        <div class="bg-blue-50 p-4 rounded-lg">
                            <h4 class="font-bold text-lg mb-2">应用成果</h4>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>审美评分超SOTA 15%</li>
                                <li>专业软件采用</li>
                                <li>处理速度提升3倍</li>
                                <li>用户评价4.9/5星</li>
                            </ul>
                        </div>
                    </div>
                    <div class="mb-6">
                        <h4 class="font-bold text-lg mb-2">项目描述</h4>
                        <p class="text-gray-700 mb-4">
                            HDR色彩校正模块是一套基于仿生视觉算法的高动态范围图像处理系统。该项目解决了传统HDR图像处理中的色彩失真和不自然问题，
                            通过模拟人眼对光线和色彩的感知机制，提供了更符合人类审美的图像增强效果。
                        </p>
                        <p class="text-gray-700">
                            核心算法采用CUDA进行加速，能够实现实时处理高分辨率HDR图像。系统已被多款专业图像处理软件采用，
                            并在摄影师和设计师群体中获得高度评价。通过人眼感知模型驱动的色调映射，解决了HDR显示的关键挑战。
                        </p>
                    </div>
                    <div>
                        <h4 class="font-bold text-lg mb-2">效果对比</h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p class="text-center mb-2 font-semibold">传统HDR处理</p>
                                <img src="https://picsum.photos/400/300?tech=4" class="w-full h-auto rounded-lg border border-gray-300">
                            </div>
                            <div>
                                <p class="text-center mb-2 font-semibold">仿生视觉优化</p>
                                <img src="https://picsum.photos/400/300?tech=5" class="w-full h-auto rounded-lg border border-gray-300">
                            </div>
                        </div>
                        <p class="text-sm text-gray-600 mt-2 text-center">
                            左图为传统HDR处理结果，右图为使用仿生视觉模型优化后的结果，展现更自然的色彩过渡和更丰富的细节
                        </p>
                    </div>
                `
            }
        };

        if (projects[projectId]) {
            modalTitle.innerHTML = projects[projectId].title;
            modalContent.innerHTML = projects[projectId].content;
            projectModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // 防止背景滚动
        }
    };

    // 语言切换按钮(预留接口)
    const langSwitch = document.getElementById('lang-switch');
    const langSwitchMobile = document.getElementById('lang-switch-mobile');
    
    if (langSwitch) {
        langSwitch.addEventListener('click', function() {
            // 这里预留中英文切换逻辑
            alert('语言切换功能即将上线');
        });
    }
    
    if (langSwitchMobile) {
        langSwitchMobile.addEventListener('click', function() {
            // 移动端语言切换逻辑
            alert('语言切换功能即将上线');
        });
    }

    // 页面滚动进度条
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', function() {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}); 