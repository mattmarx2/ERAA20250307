ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3763").setExtent([-29230.420577, 102810.365415, -28801.609478, 103115.247065]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ParcelasBUPI_Fev_1 = new ol.format.GeoJSON();
var features_ParcelasBUPI_Fev_1 = format_ParcelasBUPI_Fev_1.readFeatures(json_ParcelasBUPI_Fev_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_ParcelasBUPI_Fev_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParcelasBUPI_Fev_1.addFeatures(features_ParcelasBUPI_Fev_1);
var lyr_ParcelasBUPI_Fev_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParcelasBUPI_Fev_1, 
                style: style_ParcelasBUPI_Fev_1,
                popuplayertitle: 'ParcelasBUPI_Fev',
                interactive: false,
                title: '<img src="styles/legend/ParcelasBUPI_Fev_1.png" /> ParcelasBUPI_Fev'
            });
var format_xref_tracado_2 = new ol.format.GeoJSON();
var features_xref_tracado_2 = format_xref_tracado_2.readFeatures(json_xref_tracado_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_xref_tracado_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_xref_tracado_2.addFeatures(features_xref_tracado_2);
var lyr_xref_tracado_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_xref_tracado_2, 
                style: style_xref_tracado_2,
                popuplayertitle: 'xref_tracado',
                interactive: false,
                title: '<img src="styles/legend/xref_tracado_2.png" /> xref_tracado'
            });
var format_LimitesAdmin_3 = new ol.format.GeoJSON();
var features_LimitesAdmin_3 = format_LimitesAdmin_3.readFeatures(json_LimitesAdmin_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_LimitesAdmin_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesAdmin_3.addFeatures(features_LimitesAdmin_3);
var lyr_LimitesAdmin_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesAdmin_3, 
                style: style_LimitesAdmin_3,
                popuplayertitle: 'LimitesAdmin',
                interactive: false,
                title: '<img src="styles/legend/LimitesAdmin_3.png" /> LimitesAdmin'
            });
var format_LimiteExprop_4 = new ol.format.GeoJSON();
var features_LimiteExprop_4 = format_LimiteExprop_4.readFeatures(json_LimiteExprop_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_LimiteExprop_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteExprop_4.addFeatures(features_LimiteExprop_4);
var lyr_LimiteExprop_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteExprop_4, 
                style: style_LimiteExprop_4,
                popuplayertitle: 'LimiteExprop',
                interactive: false,
                title: '<img src="styles/legend/LimiteExprop_4.png" /> LimiteExprop'
            });
var format_PrediosERAA_5 = new ol.format.GeoJSON();
var features_PrediosERAA_5 = format_PrediosERAA_5.readFeatures(json_PrediosERAA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_PrediosERAA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrediosERAA_5.addFeatures(features_PrediosERAA_5);
var lyr_PrediosERAA_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrediosERAA_5, 
                style: style_PrediosERAA_5,
                popuplayertitle: 'PrediosERAA',
                interactive: true,
                title: '<img src="styles/legend/PrediosERAA_5.png" /> PrediosERAA'
            });
var group_PrediosERAA = new ol.layer.Group({
                                layers: [lyr_PrediosERAA_5,],
                                fold: "open",
                                title: 'PrediosERAA'});
var group_LimiteExpropriacao = new ol.layer.Group({
                                layers: [lyr_LimiteExprop_4,],
                                fold: "open",
                                title: 'LimiteExpropriacao'});
var group_xrefs = new ol.layer.Group({
                                layers: [lyr_xref_tracado_2,],
                                fold: "open",
                                title: 'xrefs'});
var group_Rasters = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,],
                                fold: "open",
                                title: 'Rasters'});

lyr_GoogleSatellite_0.setVisible(true);lyr_ParcelasBUPI_Fev_1.setVisible(true);lyr_xref_tracado_2.setVisible(true);lyr_LimitesAdmin_3.setVisible(true);lyr_LimiteExprop_4.setVisible(true);lyr_PrediosERAA_5.setVisible(true);
var layersList = [group_Rasters,lyr_ParcelasBUPI_Fev_1,group_xrefs,lyr_LimitesAdmin_3,group_LimiteExpropriacao,group_PrediosERAA];
lyr_ParcelasBUPI_Fev_1.set('fieldAliases', {'fid': 'fid', 'area_m2': 'area_m2', });
lyr_xref_tracado_2.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_LimitesAdmin_3.set('fieldAliases', {'fid': 'fid', 'DICOFRE': 'DICOFRE', 'Freguesia': 'Freguesia', 'Municipio': 'Municipio', 'Ilha': 'Ilha', 'TAA': 'TAA', 'Area_T_ha': 'Area_T_ha', 'Area_EA_ha': 'Area_EA_ha', 'Distrito': 'Distrito', 'Des_Simpli': 'Des_Simpli', 'layer': 'layer', });
lyr_LimiteExprop_4.set('fieldAliases', {'LimiteExpropriacao': 'LimiteExpropriacao', });
lyr_PrediosERAA_5.set('fieldAliases', {'Parcela': 'Parcela', 'AreaTotal': 'AreaTotal', 'Artigo Matriz': 'Artigo Matriz', 'Artigo Antigo': 'Artigo Antigo', 'Descrição Predial': 'Descrição Predial', 'Morada': 'Morada', 'Nome': 'Nome', 'Contribuinte': 'Contribuinte', 'Telefone': 'Telefone', 'Observações': 'Observações', 'AreaCadernetaAtual': 'AreaCadernetaAtual', 'AreasProj_x_AreasMatriz': 'AreasProj_x_AreasMatriz', 'MatrizBupi': 'MatrizBupi', 'Indicacao': 'Indicacao', 'EspacoAgricola': 'EspacoAgricola', 'EspacoAtivEco': 'EspacoAtivEco', 'EspacoEquiInfra': 'EspacoEquiInfra', 'EspacoEspEquiInfra': 'EspacoEspEquiInfra', 'EspacoFlorestal': 'EspacoFlorestal', 'EspacoHabitacional': 'EspacoHabitacional', 'EspacoNatPaisa': 'EspacoNatPaisa', 'EspacoVerde': 'EspacoVerde', 'AreaTotExprop': 'AreaTotExprop', });
lyr_ParcelasBUPI_Fev_1.set('fieldImages', {'fid': '', 'area_m2': '', });
lyr_xref_tracado_2.set('fieldImages', {'fid': 'TextEdit', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_LimitesAdmin_3.set('fieldImages', {'fid': '', 'DICOFRE': '', 'Freguesia': '', 'Municipio': '', 'Ilha': '', 'TAA': '', 'Area_T_ha': '', 'Area_EA_ha': '', 'Distrito': '', 'Des_Simpli': '', 'layer': '', });
lyr_LimiteExprop_4.set('fieldImages', {'LimiteExpropriacao': '', });
lyr_PrediosERAA_5.set('fieldImages', {'Parcela': 'TextEdit', 'AreaTotal': 'TextEdit', 'Artigo Matriz': 'TextEdit', 'Artigo Antigo': 'TextEdit', 'Descrição Predial': 'TextEdit', 'Morada': 'TextEdit', 'Nome': 'TextEdit', 'Contribuinte': 'TextEdit', 'Telefone': 'TextEdit', 'Observações': 'TextEdit', 'AreaCadernetaAtual': 'TextEdit', 'AreasProj_x_AreasMatriz': 'TextEdit', 'MatrizBupi': 'TextEdit', 'Indicacao': 'TextEdit', 'EspacoAgricola': '', 'EspacoAtivEco': '', 'EspacoEquiInfra': '', 'EspacoEspEquiInfra': '', 'EspacoFlorestal': '', 'EspacoHabitacional': '', 'EspacoNatPaisa': '', 'EspacoVerde': '', 'AreaTotExprop': '', });
lyr_ParcelasBUPI_Fev_1.set('fieldLabels', {'fid': 'no label', 'area_m2': 'inline label - visible with data', });
lyr_xref_tracado_2.set('fieldLabels', {'fid': 'inline label - visible with data', 'Layer': 'inline label - visible with data', 'PaperSpace': 'inline label - visible with data', 'SubClasses': 'inline label - visible with data', 'Linetype': 'inline label - visible with data', 'EntityHandle': 'inline label - visible with data', 'Text': 'inline label - visible with data', });
lyr_LimitesAdmin_3.set('fieldLabels', {'fid': 'inline label - visible with data', 'DICOFRE': 'inline label - visible with data', 'Freguesia': 'inline label - visible with data', 'Municipio': 'inline label - visible with data', 'Ilha': 'inline label - visible with data', 'TAA': 'inline label - visible with data', 'Area_T_ha': 'inline label - visible with data', 'Area_EA_ha': 'inline label - visible with data', 'Distrito': 'inline label - visible with data', 'Des_Simpli': 'inline label - visible with data', 'layer': 'inline label - visible with data', });
lyr_LimiteExprop_4.set('fieldLabels', {'LimiteExpropriacao': 'inline label - visible with data', });
lyr_PrediosERAA_5.set('fieldLabels', {'Parcela': 'no label', 'AreaTotal': 'no label', 'Artigo Matriz': 'no label', 'Artigo Antigo': 'no label', 'Descrição Predial': 'no label', 'Morada': 'no label', 'Nome': 'no label', 'Contribuinte': 'no label', 'Telefone': 'no label', 'Observações': 'no label', 'AreaCadernetaAtual': 'no label', 'AreasProj_x_AreasMatriz': 'no label', 'MatrizBupi': 'no label', 'Indicacao': 'no label', 'EspacoAgricola': 'no label', 'EspacoAtivEco': 'no label', 'EspacoEquiInfra': 'no label', 'EspacoEspEquiInfra': 'no label', 'EspacoFlorestal': 'no label', 'EspacoHabitacional': 'no label', 'EspacoNatPaisa': 'no label', 'EspacoVerde': 'no label', 'AreaTotExprop': 'no label', });
lyr_PrediosERAA_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});