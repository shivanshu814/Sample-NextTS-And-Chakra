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
    fallback: false, // we can pregenerate only some of our pages, especialy popular pages.
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  //fetch data from api for one turbine with id
  return {
    props: {
      turbine: DUMMY_TURBINES[parseInt(id)],
    },
    revalidate: 60,
  };
};

const Detail = ({ turbine }) => {
  return <TurbineDetail turbine={turbine} />;
};

export default Detail;
