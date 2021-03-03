//Вершина горы
function functionVergori() {

    
let adp = prompt("Атмосферное давление у подножья горы:")
let adv = prompt("Атмосферное давление на вершине горы:")
let desyat = (10.5)

itog1 = adp - adv
itog2 = itog1 * desyat

alert("Высота горы: " + itog2)
}


//высота и температура у подножья
function functionVerTp() {

    
    let adp = prompt("Атмосферное давление у подножья горы:")
    let tp = prompt("Температура у подножья:")
    let tv = prompt("Температура вершины горы")
    let desyat = (10.5)
    
    itog1 = (tp - tv) * 1000 / 6
    itog2 = (adp - itog1) / desyat

    alert("Высота горы: " + itog1)
    alert("Температура у подножья: " + itog2)
}
//высота и темрература у подножья 2
function functionVerTpTwo() {

    
    let adp = prompt("Атмосферное давление у подножья горы:")
    let adv = prompt("Атмосферное давление на вершине горы:")
    let tp = prompt("Температура вершины:")
    
    let desyat = (10.5)
    
    itog1 = (adp - adv) * desyat
    itog2 = tp + itog1 / 1000
    
    alert("Высота горы: " + itog1)
    alert("Температура подножья: " + itog)
    }

//ад на вершине горы
function functionADvergori() {
    
let ad = prompt("Атмосферное давление у подножья горы:")
let gora = prompt("Высота горы: (В метрах)")
let desyat = (10.5)

itog1 = Math.floor(ad - gora / desyat) + 1

alert("Атмосферное давление на вершине горы: " + itog1)
}