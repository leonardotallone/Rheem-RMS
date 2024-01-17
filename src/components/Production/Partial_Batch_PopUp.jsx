import QR from "../../assets/logos/QR.png";

const Partial_Batch_PopUp = (e) => {

  const closeModal=() => {
    e.params()
  }

console.log("ESTO ES PROPS",e.params)

  return <> 
  <div className="row">
    {/* <div className=" col s12 m12 l12 top-top-banner"></div> */}
    {/* <div className="col s12 m12 l12 top-banner"></div> */}
  </div>
  {/* ---------------------------------------Banner Title------------------- */}
  <div className="row">
    <div className="col s12 m12 l12 title-banner-batch-reserve z-depth-2">
      <div className="container">

        <div className="col s7 m8 l8 no-margin">
          <p className="font-title-batch-list">Lotes en Reserva</p>
          <p className="font-subtitle-batch-list">Plan Digital</p>
        </div>
    

        <div className="col s11 m5 l3 no-margin">
          <p className="font-form-batch-list left ">RC:16-062</p>
          <p className="font-plan-batch-list left ">PLAN Nº: D0103-2023</p>
          {/* <p className="font-date-batch-list left ">FECHA DE REGISTRO: 23-06-2023</p> */}
        </div>

        <div className="col s1 m1 l1 push-m6">
          <img className="qr right " src={QR} alt=""></img>
          <i className=" right material-symbols-outlined print">print</i>
        </div>

      </div>
    </div>
  </div>

  {/* ---------------------------------------Formulario------------------- */}

  <div className="container">
    <div className="row hide-on-med-and-down">
      <div className="col s12 m12 l12 no-margin">
        <div className="display-box-batchs z-depth-1">


          <div className="col s1 m1 l1 center box-left ">
            <p className="batch-number">1234</p> 
            <p className="batch-mode">TO STOCK</p>
          </div>
          
          <div className="col s10 m10 l10">
             <div className="row row-fix">
              <div className="center-align titles bottom-line valign-wrapper ">
              <div className="col m1 l1 right-line-title ">SKU</div>
              <div className="col m2 l2 right-line-title ">Descripción</div>
              <div className="col m1 l1 right-line-title">Cantidad</div>
              <div className="col m2 l2 right-line-title ">SNº Inicial</div>
              <div className="col m2 l2 right-line-title ">SNº Final</div>
              <div className="col m3 l3 right-line-title ">Uso Alternativo</div> 
              <div className="col m1 l1                  ">Estado</div>
             </div>
            </div>
            <div className="row row-fix">
            <div className="center-align sub-titles valign-wrapper">
              <div className="col m1 l1 right-line-sub-title bottom-line-sub-title">123456</div>
              <div className="col m2 l2 right-line-sub-title bottom-line-sub-title">CFRHMIOB13LBAABLME</div>
              <div className="col m1 l1 right-line-sub-title bottom-line-sub-title">200</div>
              <div className="col m2 l2 right-line-sub-title bottom-line-sub-title">1000</div>
              <div className="col m2 l2 right-line-sub-title bottom-line-sub-title ">1200</div>
              <div className="col m3 l3 no-margin"> 
                {/* <div className="row row-fix"> */}
                  <div className="col m6 l6 right-line-sub-title bottom-line-sub-title ">123456</div>
                  <div className="col m6 l6 right-line-sub-title bottom-line-sub-title ">654321</div>
                {/* </div> */}
              </div>
              <div className="col l1 bottom-line-sub-title reserve-status           ">RESERVA</div>
            </div>
            </div>
            <div className="row row-fix ">
               <div className="col s12 m12 l12 bottom-line-observaciones observaciones-batch-list">
                <p className="">Observaciones:
                <p className="observaciones-batch-list-display">
               Lorem ipsum dolor sit amet consectetur adipiscing elit dis tempus primis bibendum, maecenas eleifend eu senectus sagittis ligula feugiat risus auctor arcu. Integer neque porttitor non eros congue diam enim odio erat rhoncus, nunc cubilia tempus vulputate magna nec proin eu penatibus, hendrerit tellus accumsan nostra est eget quam class varius.
               </p>
                </p>
             
               </div>
               <div className="col s12 m12 l12 ">
               <p className="vigencia">Vigencia:
               <p className="col s12 m12 l12 vigencia-batch-text no-margin">
               Lorem ipsum dolor sit amet consectetur adipiscing elit dis tempus primis bibendum, maecenas eleifend eu senectus sagittis ligula feugiat risus auctor arcu.
              </p>
               </p>
               </div>
            </div>
          </div>

          <div className="col s1 m1 l1 box-right center-align"> 
          </div>
        </div>
      </div>
    </div>


      {/* mid and small view */}

    {/*------------------------------------ MEDIUM_SMALL_VIEW --------------------------------------------------------*/}

    <div className="row hide-on-large-only">
        <div className="display-box-batchs-ms z-depth-1">


          <div className="col s4 m3 center box-left-ms ">
            <p className="batch-number-ms">1234</p> 
            <p className="batch-mode-ms">TO STOCK</p>
          </div>

          <div className="col s8 m9 top-box-ms valign-wrapper">
          
             <i className="material-symbols-outlined">edit</i>
             <i className="material-symbols-outlined">warning</i>
             <p className="mins-font">23</p>&nbsp;<p className="mins-font">mins.</p>
             <i className="material-symbols-outlined">timer</i>
          </div>  

          <div className="col s4 m3 no-margin">
              <div className="col s12 m12 titles-ms right-line-title-ms bottom-line-ms">SKU</div>
              <div className="col s12 m12 titles-ms right-line-title-ms bottom-line-ms">Descripción</div>
              <div className="col s12 m12 titles-ms right-line-title-ms bottom-line-ms">Cantidad</div>
              <div className="col s12 m12 titles-ms right-line-title-ms bottom-line-ms">SNº Inicial</div>
              <div className="col s12 m12 titles-ms right-line-title-ms bottom-line-ms">SNº Final</div>
              <div className="col s12 m12 titles-ms-hm right-line-title-ms bottom-line-ms hide-on-small-only">Uso Alternativo</div>
              <div className="col s12 m12 titles-ms-hs right-line-title-ms bottom-line-ms hide-on-med-only">Uso Alternativo</div>  
              <div className="col s12 m12 titles-ms right-line-title-ms bottom-line-ms">Estado</div>
          </div>

          <div className="col s8 m9 no-margin">
                  <div className="col s12 m12 sub-titles-ms bottom-line-sub-title-ms">123456</div>
                  <div className="col s12 m12 sub-titles-ms bottom-line-sub-title-ms">CFRHMIOB13LBAABLME</div>
                  <div className="col s12 m12 sub-titles-ms bottom-line-sub-title-ms">200</div>
                  <div className="col s12 m12 sub-titles-ms bottom-line-sub-title-ms">12345678910</div>
                  <div className="col s12 m12 sub-titles-ms bottom-line-sub-title-ms">12345678910</div>
                  <div className="col s12 m12 sub-titles-ms bottom-line-sub-title-ms">123456</div>
                  <div className="col s12 m12 sub-titles-ms bottom-line-sub-title-ms">654321</div>
                  <div className="col s12 m12 sub-titles-ms bottom-line-sub-title-ms reserve-status">RESERVA</div>
          </div>

          <div className="row row-fix ">
               <div className="col s12 m12 observaciones-batch-list">
                <p className="">Observaciones:
                <p className="observaciones-batch-list-display">
               Lorem ipsum dolor sit amet consectetur adipiscing elit dis tempus primis bibendum, maecenas eleifend eu senectus sagittis ligula feugiat risus auctor arcu. Integer neque porttitor non eros congue diam enim odio erat rhoncus.
                </p>
                </p>
             
               </div>
               <div className="col s12 m12 ">
                <p className="vigencia">Vigencia:
                <p className="col s12 m12 vigencia-batch-text no-margin">
                Lorem ipsum dolor sit amet consectetur adipiscing elit dis tempus primis bibendum, maecenas eleifend eu senectus sagittis ligula feugiat risus auctor arcu.
                </p>
                </p>
               </div>
            </div>
        </div>
      </div>
    
    {/* PAGINADO */}

    <div className="col s12 m12 l12 center">
        <ul className="pagination ">
         <li className="disabled"><a href="#!"><i className="material-icons chevron">chevron_left</i></a></li>
         <li className="active"><a className="font-pagination-seslected"href="#!">1</a></li>
         <li className="waves-effect"><a className="font-pagination" href="#!">2</a></li>
         <li className="waves-effect"><a className="font-pagination" href="#!">3</a></li>
         <li className="waves-effect"><a className="font-pagination" href="#!">4</a></li>
         <li className="waves-effect"><a className="font-pagination" href="#!">5</a></li>
         <li className="waves-effect"><a className="font-pagination" href="#!"><i className="material-icons chevron ">chevron_right</i></a></li>
        </ul>
      </div>



    {/* botones  */}
    <div className="row">
      <div className="col s12 m12 l4 ">
          <button onClick={closeModal}className="btn-small btn-block waves-effect waves-light z-depth-2 button-regresar-plan-list " type="submit">
            regresar
          </button>
      </div>

      <div className="col s12 m12 l4  right">
          <button className="btn-small btn-block waves-effect waves-light z-depth-2 button-add-remove-batch-list" type="submit">
            ingresar Lote a Plan
          </button>
      </div>
        {/* row */}
        </div>  


    {/* container */}
  </div>

  </>
};

export default Partial_Batch_PopUp;
