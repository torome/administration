# IOC 容器实例注册

Administration 将作为一个特殊的组件存在，全局仅允许一个 Administration 组件存在，并可以在注册 IOC 实例时注册对应路由及管理入口。

示例代码如下：

## 类 Administrator

```php
namespace Notadd\Administration;

use Notadd\Foundation\Administration\Abstracts\Administrator as AbstractAdministrator;

/**
 * Class Administrator.
 */
class Administrator extends AbstractAdministrator
{
}
```

## Administrator Register

```php
namespace Notadd\Administration;

use Illuminate\Support\ServiceProvider;
use Notadd\Administration\Controllers\AdminController;
use Notadd\Foundation\Administration\Administration;

/**
 * Class Extension.
 */
class ModuleServiceProvider extends ServiceProvider
{
    /**
     * Boot service provider.
     *
     * @param \Notadd\Foundation\Administration\Administration $administration
     */
    public function boot(Administration $administration)
    {
        $administrator = new Administrator($this->app['events'], $this->app['router']);
        $administrator->registerPath('admin');
        $administrator->registerHandler(AdminController::class . '@handle');
        $administration->setAdministrator($administrator);
    }
}
```
