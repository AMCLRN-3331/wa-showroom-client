import { makeAutoObservable } from "mobx";

export default class AutoStore {
    constructor() {
        this._brands = [];

        this._bodies = [];

        this._models = [];

        this._colors = [];

        this._gearboxes = [];

        this._autos = [];

        this._selectedBrand={};

        this._selectedBody={};

        this._selectedColor={};

        this._selectedModel={};

        this._selectedGearbox={};

        this._selectedAuto={};


        this._page = 1;
        this._totalCount = 0;
        this._limit = 8;


        makeAutoObservable(this);
    }

    setBrands(brands) {
        
        this._brands = brands;
    }

    setBodies(bodies) {
        this._bodies = bodies;
    }

    setModels(models) {
        this._models = models;
    }

    setColors(colors) {
        this._colors = colors;
    }

    setGearboxes(gearboxes) {
        this._gearboxes = gearboxes;
    }

    setAutos(autos) {
        this._autos = autos;
    }

    setSelectedBrand(brand) {
        this.setPage(1);
        this._selectedBrand = brand;
    }

    setSelectedBody(body) {
        this._selectedBody = body;
    }

    setSelectedColor(color) {
        this._selectedColor = color;
    }

    setSelectedModel(model) {
        this.setPage(1);
        this._selectedModel = model;
    }
    
    setSelectedGearbox(gearbox) {
        this._selectedGearbox = gearbox;
    }

    setSelectedAuto(auto){
        this._selectedAuto = auto;
    }

    setPage(page){
        this._page = page;
    }

    setTotalCount(totalCount){
        this._totalCount = totalCount;
    }

    setLimit(limit){
        this._limit = limit;
    }


    get brands() {
        return this._brands;
    }

    get bodies(){
        return this._bodies;
    }

    get models(){
        return this._models;
    }

    get colors(){
        return this._colors;
    }

    get gearboxes(){
        return this._gearboxes;
    }
    
    get selectedBrand(){
        return this._selectedBrand;
    }

    get selectedBody(){
        return this._selectedBody;
    }

    get selectedColor(){
        return this._selectedColor;
    }

    get selectedGearbox(){
        return this._selectedGearbox;
    }

    get selectedModel(){
        return this._selectedModel;
    }

    get selectedAuto(){
        return this._selectedAuto;
    }

    get autos() {
        return this._autos;
    }

    get page(){
        return this._page;
    }

    get totalCount(){
        return this._totalCount;
    }

    get limit(){
        return this._limit;
    }
}