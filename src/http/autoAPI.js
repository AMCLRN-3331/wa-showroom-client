import { $authHost, $host } from "./index";

export const fetchBrands = async () => {
    const { data } = await $host.get('api/brand');
    return data;
}

export const fetchAutos = async (brandId, modelId, page, limit) => {
    const { data } = await $host.get('api/auto', {params: {
        brandId, modelId, page, limit
    }});
    return data;
}

export const fetchOneAuto = async (id) => {
    const { data } = await $host.get('api/auto/' + id);
    return data;
}

export const fetchBodies = async () => {
    const { data } = await $host.get('api/body');
    return data;
}

export const fetchBookings = async () =>{
    const { data } = await $authHost.get('api/booking');
    return data;
}

export const fetchModels = async () => {
    const { data } = await $host.get('api/model');
    return data;
}

export const fetchColorsForAuto = async (autoId) => {
    const { data } = await $host.get('api/color/' + autoId);
    return data;
}

export const fetchColors = async () => {
    const { data } = await $host.get('api/color');
    return data;
}

export const fetchGearboxes = async () => {
    const { data } = await $host.get('api/gearbox');
    return data;
}


export const createBrands = async (brand) => {
    const { data } = await $authHost.post('api/brand', brand);
    return data;
}

export const createAutos = async (auto) => {
    const { data } = await $authHost.post('api/auto', auto);
    return data;
}

export const createBodies = async (body) => {
    const { data } = await $authHost.post('api/body', body);
    return data;
}

export const createModels = async (model) => {
    const { data } = await $authHost.post('api/model', model);
    return data;
}

export const createColors = async (color) => {
    const { data } = await $authHost.post('api/color', color);
    return data;
}

export const createGearboxes = async (gearbox) => {
    const { data } = await $authHost.post('api/gearbox', gearbox);
    return data;
}

export const createBooking = async (booking)=>{
    const { data } = await $host.post('api/booking', booking);
    return data;
}