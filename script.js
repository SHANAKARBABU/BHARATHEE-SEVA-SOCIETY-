document.getElementById('en-btn').addEventListener('click', function () {
    document.querySelectorAll('.en').forEach(function (el) {
        el.style.display = 'block';
    });
    document.querySelectorAll('.hi').forEach(function (el) {
        el.style.display = 'none';
    });
    document.querySelectorAll('.te').forEach(function (el) {
        el.style.display = 'none';
    });
});

document.getElementById('hi-btn').addEventListener('click', function () {
    document.querySelectorAll('.hi').forEach(function (el) {
        el.style.display = 'block';
    });
    document.querySelectorAll('.en').forEach(function (el) {
        el.style.display = 'none';
    });
    document.querySelectorAll('.te').forEach(function (el) {
        el.style.display = 'none';
    });
});

document.getElementById('te-btn').addEventListener('click', function () {
    document.querySelectorAll('.te').forEach(function (el) {
        el.style.display = 'block';
    });
    document.querySelectorAll('.en').forEach(function (el) {
        el.style.display = 'none';
    });
    document.querySelectorAll('.hi').forEach(function (el) {
        el.style.display = 'none';
    });
});
