import TurbineDetail from "../components/TurbineDetail";
import { DUMMY_TURBINES } from "../../data/data";

export const getStaticPaths = async () => {
  const paths = DUMMY_TURBINES.map((turbine) => {
    return {
      params: {
        id: turbine.id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  return {
    props: {
      turbine: DUMMY_TURBINES[parseInt(id)],
    },
  };
};

const Detail = ({ turbine }) => {
  return <TurbineDetail turbine={turbine} />;
};

export default Detail;
