import { ErrorBoundary } from "react-error-boundary";
import {
  ErrorFallback,
  MedicinesList,
  PharmaciesSideBar,
} from "../../components";
import { axiosInstance } from "../../api";
import { useEffect, useState } from "react";
import { IPharmacieData } from "../../interfaces";
import { useSearchParams, useNavigate } from "react-router-dom";
import {
  FavoritesProvider,
  ShoppingCartProvider,
} from "../../contextProviders";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getErrorMessage } from "../../helpers";

export default function Shop() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const currentPharmacyId = searchParams.get("pharmacy") || null;

  const [pharmacies, setPharmacies] = useState<IPharmacieData[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      try {
        const pharmaciesData = await axiosInstance.get("api/pharmacies");
        const pharmacies = pharmaciesData.data.data.pharmacies;
        setPharmacies(pharmacies);

        if (
          !currentPharmacyId ||
          (currentPharmacyId &&
            !pharmacies.find(
              (item: IPharmacieData) => item._id === currentPharmacyId
            ))
        ) {
          searchParams.set("pharmacy", pharmacies[0]._id);
          navigate(`?${searchParams.toString()}`);
        }
        setIsLoading(false);
      } catch (error) {
        toast.error(getErrorMessage(error));
        setIsLoading(false);
      }
    })();
  }, [currentPharmacyId, searchParams, navigate]);

  const pharmacyPickHandler = (id: string) => {
    searchParams.set("pharmacy", id);
    searchParams.delete("page");
    navigate(`?${searchParams.toString()}`);
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={(details) => {}}>
      <FavoritesProvider>
        <ShoppingCartProvider>
          <div>
            <div>
              <h1>Shop Page</h1>
            </div>

            {!isLoading ? (
              <>
                {!!pharmacies && !!currentPharmacyId && (
                  <div>
                    <PharmaciesSideBar
                      pharmacies={pharmacies}
                      pharmacyPickHandler={pharmacyPickHandler}
                    />
                    <MedicinesList currentPharmacyId={currentPharmacyId} />
                  </div>
                )}
              </>
            ) : (
              <p>XXXXXXXXXXXX=====LOADING-Pharmacies=======XXXXXXXXXXX</p>
            )}
            <ToastContainer />
          </div>
        </ShoppingCartProvider>
      </FavoritesProvider>
    </ErrorBoundary>
  );
}