export class Shared {
  static registerRouterMap (routerMap) {
    Shared.routerMap = Object.assign(Shared.routerMap, routerMap)
  }

  static registerState (state) {
    Shared.state = Object.assign(Shared.state, state)
  }
}

Shared.routerMap = {}
Shared.state = {}
