// instructions to other classes how be an argument for 'addMarker'
interface Mappable {
    location: {
        lat: number;
        lng: number;
    }
}

export class CustomMap {
    private myMap : ymaps.Map;

    constructor(id: string) {
        this.myMap = new ymaps.Map(id, {
                center: [55.751574, 37.573856],
                zoom: 1,
                controls: ['searchControl']
            });
    }

    addMarker(mappable: Mappable): void {
        // Создание геообъекта с типом точка (метка).

        let myGeoObject = new ymaps.GeoObject({
            geometry: {
                type: "Point", // тип геометрии - точка
                // @ts-ignore
                coordinates: [mappable.location.lat, mappable.location.lng] // координаты точки
            }
        });
        this.myMap.geoObjects.add(myGeoObject);
    }
}
