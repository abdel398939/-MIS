document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('course-grid');
    const infoCard = document.getElementById('info-card');
    const closeBtn = document.querySelector('.close-btn');

    grid.innerHTML = '';

    courseData.forEach(course => {
        const card = document.createElement('div');
        card.className = `course-card ${course.category}`;
        card.innerHTML = `
            <h3>${course.name}</h3>
            <p style="color: #666; font-size: 0.9rem;">${course.hours} ساعات</p>
        `;

        // دالة عرض التفاصيل
        const showDetails = (e) => {
            e.stopPropagation(); // لمنع تداخل الأحداث
            document.getElementById('card-title').innerText = course.name;
            document.getElementById('card-hours').innerText = course.hours;
            document.getElementById('card-pre').innerText = course.pre;
            document.getElementById('card-desc').innerText = course.desc;
            
            // إظهار النافذة
            infoCard.classList.remove('hidden');
        };

        // تم إلغاء mouseenter (المرور) 
        // الاعتماد كلياً على الـ click (الضغط)
        card.addEventListener('click', showDetails);

        grid.appendChild(card);
    });

    // إغلاق النافذة عند الضغط على زر الإغلاق
    closeBtn.addEventListener('click', () => {
        infoCard.classList.add('hidden');
    });

    // إغلاق النافذة عند الضغط في أي مكان خارج المحتوى الأبيض
    window.addEventListener('click', (e) => {
        if (e.target === infoCard) {
            infoCard.classList.add('hidden');
        }
    });
});