//Exercice 4 : Volume Of A Sphere

let volume_sphere = () => {
    let volume;
    let radius = document.getElementById('radius').value;
    radius = Math.abs(radius);
    volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    volume = volume.toFixed(4);
    document.getElementById('volume').value = volume;
    return false;
}
document.getElementById('MyForm').onsubmit = volume_sphere;
