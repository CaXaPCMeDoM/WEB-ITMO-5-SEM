function formatTime(ms) {
    ms = ms.toFixed(2);
    const seconds = Math.floor((ms / 1000) % 60);
    let hashMap = new Map();
    let resultStringMs = ms.toString() + 'ms'
    let resultStringSeconds = seconds.toString() + 's'
    hashMap.set('ms', resultStringMs);
    hashMap.set('s', resultStringSeconds);
    return hashMap;
}

const startTime = performance.now();

window.onload = function() {
    const endTime = performance.now();
    const loadTime = endTime - startTime;

    const copyrightElement = document.getElementById('copyright');
    let hashMap = formatTime(loadTime);
    if (loadTime <= 1000.0 ) {
        copyrightElement.innerText +=  ` Время загрузки: ${hashMap.get('ms')}`;
    } else {
        copyrightElement.innerText += ` Время загрузки: ${hashMap.get('s')}`;
    }
};