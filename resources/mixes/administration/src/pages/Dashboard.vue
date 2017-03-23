<script>
    import iEcharts from 'vue-echarts-v3';
    import injection from '../helpers/injection';

    export default {
        beforeRouteEnter(to, from, next) {
            next(() => {
                injection.sidebar.active('setting');
            });
        },
        components: {
            iEcharts,
        },
        created() {
            this.boards = injection.board.lists;
        },
        data() {
            return {
                boards: [],
            };
        },
    };
</script>
<template>
    <div class="bashboard-wrap">
        <row :gutter="20">
            <i-col :span="board.span" v-for="(board, key) in boards" :key="key">
                <card v-if="board.type === 'button'">
                    <p slot="title" v-if="board.title">{{ board.title }}</p>
                    <template v-if="board.link">
                        <template v-if="board.link.indexOf('http://') !== -1 || board.link.indexOf('https://') !== -1">
                            <a :href="board.link">
                                <i-button long :type="board.theme">{{ board.content }}</i-button>
                            </a>
                        </template>
                        <template v-else>
                            <router-link :to="board.link">
                                <i-button long :type="board.theme">{{ board.content }}</i-button>
                            </router-link>
                        </template>
                    </template>
                    <template v-else>
                        <i-button long :type="board.theme">{{ board.content }}</i-button>
                    </template>
                </card>
                <card v-if="board.type === 'chart'">
                    <p slot="title" v-if="board.title">{{ board.title }}</p>
                    <i-echarts :option="board.content" :style="board.style"></i-echarts>
                </card>
                <card v-if="board.type === 'html'">
                    <p slot="title" v-if="board.title">{{ board.title }}</p>
                    <div v-html="board.content"></div>
                </card>
                <card v-if="board.type === 'text'">
                    <p slot="title" v-if="board.title">{{ board.title }}</p>
                    <p>{{ board.content }}</p>
                </card>
            </i-col>
        </row>
    </div>
</template>
