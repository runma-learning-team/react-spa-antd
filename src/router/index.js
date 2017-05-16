/**
 * @since 2017-04-04 18:53
 * @author chenyiqin
 */


import BaseRouteContainer from '../container/router/BaseRoute'
import NoMatchContainer from '../container/common/NoMatchContainer'
import TodoInfoRouteContainer from '../container/router/TodoInfoRoute'
import TodoListRouteContainer from '../container/router/TodoListRoute'
import LearningTargetRouteContainer from '../container/router/LearningTargetRoute'

const noMatchRoute = {
    path: '*',
    component: NoMatchContainer,
}
const TodoListRoute = {
    path: 'todo-list',
    component: TodoListRouteContainer,
}
const LearningTargetRoute = {
    path: 'learning-target',
    component: LearningTargetRouteContainer,
}
const TodoInfoRoute = {
    path: 'todo(/:id)',
    component: TodoInfoRouteContainer,
}

const route = {
    path: '/',
    component: BaseRouteContainer,
    indexRoute: {
        // component: TodoListRouteContainer,
        component: LearningTargetRouteContainer,
    },
    childRoutes: [
        LearningTargetRoute,
        TodoListRoute,
        TodoInfoRoute,
        noMatchRoute,
    ],
}

export default route
