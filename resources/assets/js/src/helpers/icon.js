export default function icon(name, attrs = {}) {
    attrs.className = 'icon fa fa-fw fa-' + name + ' ' + (attrs.className || '');
    return <i {...attrs}/>;
}