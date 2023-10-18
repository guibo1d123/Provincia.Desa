import { expect, browser, $ } from '@wdio/globals'

// Login 

describe('Desa Provincia Login', () => {
    it('should login with valid credentials', async () => {
        await browser.url(`https://desa.pas.artprovincia.com.ar/`)

         // XPath para el botón que contiene el texto 'Iniciar Sesión'
        const iniciarSesionButtonXPath = "(//label[normalize-space()='Iniciar Sesión'])[1]"
        await $(iniciarSesionButtonXPath).click()

        // Xpath para el campo para colocar el usuario
        const usuarioXPath = "(//input[@name='username'])[1]"
        await $(usuarioXPath).setValue('BGRECIA')

        // Xpath para el campo para colocar contraseña
        const contraseñaXPath = "(//input[@name='password'])[1]"
        await $(contraseñaXPath).setValue('Quefrao5!!!')

        // Xpath para hacer clic en el boton ingresar
        const botonXPath = "(//button[@type='submit'])[1]"
        await $(botonXPath).click()

        // Xpath para hacer clic en cerrar sesion
        const cerrarSesionXPath = "(//button[normalize-space()='Cerrar Sesión'])[1]" 
        await $(cerrarSesionXPath).click()  
    })
})

// Ingresar a la seccion de Cotizaciones y afiliaciones y arrojar una busqueda sin filtros 

describe('Desa Provincia Cotizaciones y Afiliaciones', () => {
    it('should login with valid credentials', async () => {
        await browser.url(`https://desa.pas.artprovincia.com.ar/`)

         // XPath Hacer clic afuera 
         const Espacio = " (//label[@class='drawer-overlay'])[1]"
         await $(Espacio).click()

         // XPath Hacer clic en el boton de Cotizaciones y afiliaciones
        const CotizacionesyAfiliaciones = "(//a[normalize-space()='Cotizaciones y afiliaciones'])[1]"
        await $(CotizacionesyAfiliaciones).click()


        const FechaDesde = " (//input[@name='from'])[1]"; 

        const CaracteresNum= FechaDesde.getValue(1234567890);

        assert.equal(esNumerico, true, 'El campo FechaDesde no contiene caracteres numéricos');




    })
})

