const app = Vue.createApp({
    data() {
        return {
            activeSection: 'about',
            feedbacks: [
                {
                    id: 1,
                    name: '张三',
                    avatar: 'images/avatar1.jpg',
                    content: '将游戏元素与传统文化结合的方式非常新颖，让年轻人更容易接受传统文化。',
                    rating: 5
                },
                {
                    id: 2,
                    name: '李四',
                    avatar: 'images/avatar2.jpg',
                    content: '叶雕作品太精美了，完美展现了古建筑的韵味。',
                    rating: 5
                }
            ],
            newFeedback: {
                name: '',
                email: '',
                message: '',
                rating: 5
            },
            buildings: [
                {
                    id: 1,
                    name: '平遥古城',
                    image: 'images/building-1.jpg',
                    description: '世界文化遗产，保存完整的明清古城'
                },
                {
                    id: 2,
                    name: '大同华严寺',
                    image: 'images/building-2.jpg',
                    description: '辽金时期建筑，具有独特的建筑艺术价值'
                }
            ]
        }
    },
    methods: {
        submitFeedback() {
            // 处理表单提交
            this.feedbacks.push({
                id: this.feedbacks.length + 1,
                name: this.newFeedback.name,
                content: this.newFeedback.message,
                rating: this.newFeedback.rating,
                avatar: 'images/default-avatar.jpg'
            });
            // 重置表单
            this.newFeedback = {
                name: '',
                email: '',
                message: '',
                rating: 5
            };
        },
        setActiveSection(section) {
            this.activeSection = section;
        }
    }
});

app.mount('#app'); 