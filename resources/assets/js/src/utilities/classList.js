export default function classList(classes) {
    let classNames;
    if (classes instanceof Array) {
        classNames = classes.filter(name => name);
    } else {
        classNames = [];
        for (const i in classes) {
            if (classes[i]) classNames.push(i);
        }
    }
    return classNames.join(' ');
}