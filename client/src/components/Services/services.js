import React from "react";
import { Container, Table } from "reactstrap";
import Cd from "../img/services/cd.png";
import Coa from "../img/services/coa.png";
import Im from "../img/services/im.png";
import Ps from "../img/services/ps.png";
import Pvc from "../img/services/pvc.png";
import Rc from "../img/services/rc.png";
import Sa from "../img/services/sa.png";
import Sdc from "../img/services/sdc.png";
import Wtr from "../img/services/wtr.png";

const Services = () => {
  return (
    <Container>
      <Table size="sm" borderless className="services-row  text-center">
        <tbody>
          <tr>
            <td>
              <img className="services-icon" src={Pvc} alt="Services" />
              <p className="services-title ">
                Preventative <br /> Dentistry
              </p>
            </td>
            <td>
              <img className="services-icon" src={Cd} alt="Services" />
              <p className="services-title">
                Costmetic <br /> Dentistry
              </p>
            </td>
            <td>
              <img className="services-icon" src={Coa} alt="Services" />
              <p className="services-title">
                Clear Ortho <br /> Aligners
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <img className="services-icon" src={Im} alt="Services" />
              <p className="services-title">Implants</p>
            </td>
            <td>
              <img className="services-icon" src={Sa} alt="Services" />
              <p className="services-title">
                Sedation /<br /> Anesthesia
              </p>
            </td>
            <td>
              <img className="services-icon" src={Sdc} alt="Services" />
              <p className="services-title">
                Same Day <br /> Crowns
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <img className="services-icon" src={Ps} alt="Services" />
              <p className="services-title">
                Oral <br /> Surgery
              </p>
            </td>
            <td>
              <img className="services-icon" src={Rc} alt="Services" />
              <p className="services-title">
                Root <br /> Canals
              </p>
            </td>
            <td>
              <img className="services-icon" src={Wtr} alt="Services" />
              <p className="services-title">
                Wisdom Teeth <br /> Removal
              </p>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Services;
