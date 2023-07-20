var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Punti_1 = new ol.format.GeoJSON();
var features_Punti_1 = format_Punti_1.readFeatures(json_Punti_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punti_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punti_1.addFeatures(features_Punti_1);
var lyr_Punti_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Punti_1, 
                style: style_Punti_1,
                interactive: true,
                title: '<img src="styles/legend/Punti_1.png" /> Punti'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Punti_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Punti_1];
lyr_Punti_1.set('fieldAliases', {'id': 'id', 'COD': 'COD', 'NOTE': 'NOTE', });
lyr_Punti_1.set('fieldImages', {'id': 'TextEdit', 'COD': 'ValueMap', 'NOTE': 'TextEdit', });
lyr_Punti_1.set('fieldLabels', {'id': 'no label', 'COD': 'no label', 'NOTE': 'no label', });
lyr_Punti_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});