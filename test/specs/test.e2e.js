import { expect, browser, $ } from '@wdio/globals'



// Login - Camino Feliz
describe('Desa Provincia Login', () => {

    it('Abrir la URL - Maximizar la pagina', async () => {
        await browser.url(`https://desa.pas.artprovincia.com.ar/`)
        await browser.maximizeWindow();

    })


    it('Hacer clic en Iniciar Sesion ', async () => {
        await browser.url(`https://desa.pas.artprovincia.com.ar/`)
     
         // Hacer clic en 'Iniciar Sesión'
        const iniciarSesion = await $('.drawer-content');
        await iniciarSesion.click();

    })
    
    
    it('Hacer clic en Usuario ', async () => {

        // Hacer clic para colocar el usuario
        const usuario= await $('input[name="username"]');
        await usuario.click();
        await usuario.setValue('BGRECIA');
        await browser.pause(3000);

    })


    it('Hacer clic en password', async () => {

        //Hacer clic  para colocar contraseña
        const contraseña = await $('input[name="password"]');
        await contraseña.click();
        await contraseña.setValue('Quefrao5!!!');
        await browser.pause(3000);
    })


    it('Hacer clic en Ingresar', async () => {


        //Hacer clic en el boton ingresar
        const boton =  await $("button[type='submit']");
        await boton.click();

        // Espera 5 segundos antes de hacer clic en cualquier parte de la pantalla
        await browser.pause(5000);
    })

    it('Hacer clic en Ventas ', async () => {
        await browser.url(`https://desa.pas.artprovincia.com.ar/`)

        const cuerpo = "//div[@id='__next']"
        await $(cuerpo).click()

        // Hacer clic en Ventas
        const Ventas = await $("li:nth-child(2) button:nth-child(1)");
        await Ventas.click();

        await browser.pause(5000);
    })


    it('Hacer clic en cotizaciones y afiliaciones ', async () => {


        //Hacer clic en Cotizaciones y afiliaciones
        const Cotizaciones = await $('.py-2');
        await Cotizaciones.click()

        await browser.pause(5000);
    })

    it('Validar que diga Cotizaciones y afiliaciones ', async () => {


        // Validar que tenga titulo Cotizaciones y Afiliaciones 
        const TituloCotiyafi = await $('.text-base.text-black.font-bold.text-center');
        //Valida que tiene ese texto 
        await expect(TituloCotiyafi).toHaveText('Cotizaciones y Afiliaciones')


        await browser.pause(5000);
    })   


    it('Realizar una busqueda ', async () => {


        //Hacer clic en Buscar  
        const Buscarcotizaciones = await $("button[type='submit']");
        //Valida si el boton esta habilitado
        await Buscarcotizaciones.click();
        await browser.pause(5000);
    })   
    
    it('Copiar el ultimo nro de Solicitud realizado y realizar una busqueda', async () => {

        // Copiar el ultimo nro de contrato realizado
        const Nrodesolicitud = await $("tbody tr:nth-child(1) td:nth-child(2) span:nth-child(1)");
        const textoNroContrato = await Nrodesolicitud.getText(); // Obtener el texto
    
        // Pegar el texto en otro campo
        const campoDestinoNrodesolicitud = await $("input[name='requestNumber']");
        await campoDestinoNrodesolicitud.setValue(textoNroContrato); // Usar el texto obtenido
    
        await browser.pause(3000);
    });
    
    it('Realizar la Busqueda con el filtro de Nro de solicitud', async () => {

        //Hacer clic en Buscar  
        const Buscarcotizaciones = await $("button[type='submit']");
        //Valida si el boton esta habilitado
        await Buscarcotizaciones.click();
        await browser.pause(5000);
    }); 
    
    it('Copiar el ultima razon social realizado y realizar una busqueda', async () => {

        // Copiar el ultima razon social realizado
        const Nroderazonsocial = await  $("input[name='companyName']");
        const textorazonsocial = await Nroderazonsocial.getText(); // Obtener el texto
    
        // Pegar el texto en otro campo
        const camporazonsocial = await $("input[name='companyName']");
        await camporazonsocial.setValue(textorazonsocial); // Usar el texto obtenido
    
        await browser.pause(3000);
    });

    it('Realizar la Busqueda con el filtro de Nro de solicitud + Campo CUIT', async () => {

        //Hacer clic en Buscar  
        const Buscarcotizaciones = await $("button[type='submit']");
        //Valida si el boton esta habilitado
        await Buscarcotizaciones.click();
        await browser.pause(5000);
    }); 


    it('Borrar filtro ', async () => {
        await browser.url(`https://desa.pas.artprovincia.com.ar/cotizaciones`)


    }); 

    it('Realizar Busqueda para exportar Excel ', async () => {
        await browser.url(`https://desa.pas.artprovincia.com.ar/cotizaciones`)
         //Hacer clic en Buscar  
         const Buscar = await $("button[type='submit']");
         //Valida si el boton esta habilitado
         await Buscar.click();
         await browser.pause(5000);

    }); 

    it('Exportar excel ', async () => {
         
         const Exportarexcel = await $("button[type='button']");
         await Exportarexcel.click();
         await browser.pause(5000);

    }); 

})

