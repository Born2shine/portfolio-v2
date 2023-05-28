import { collection, getDocs } from "firebase/firestore";
import React, { createContext, useContext, useEffect, useState } from "react";
import { db } from "../config/firebase";

const AppContext = createContext() 

const AppProvider = ({children}) => {
	const [loading, setLoading] = useState(false)
	const [store, setStore] = useState({
		socialLinks: [],
		work_experience: [],
		education_info: [],
		tech_stacks: [],
		works: [],
	});
	const collectionQuery = (db, collection_name) => collection(db, collection_name)

	useEffect(() => {
		const getSocialLinks = async () => {
		  try {
			const data = await getDocs(collectionQuery(db, "social_links"));
			const filteredData = data.docs.map((doc) => ({
			  ...doc.data(),
			  id: doc.id,
			}));
			setStore({...store, socialLinks: filteredData})
		  } catch (error) {
			console.log(error);
		  }
		};
		getSocialLinks();
	}, []);

	useEffect(() => {
		setLoading(true)
		const getWorkExperience = async () => {
		  try {
			const data = await getDocs(collectionQuery(db, "work_experience"));
			const edu = await getDocs(collectionQuery(db, "education"));
			const stacks = await getDocs(collectionQuery(db, "tech_stacks"));
			const works = await getDocs(collectionQuery(db, "works"));

			const filteredData = data.docs.map((doc) => ({
			  ...doc.data(),
			  id: doc.id,
			}));
			const filteredEdu = edu.docs.map((doc) => ({
			  ...doc.data(),
			  id: doc.id,
			}));
			const filteredStacks = stacks.docs.map((doc) => ({
			  ...doc.data(),
			  id: doc.id,
			}));
			const filteredWorks = works.docs.map((doc) => ({
			  ...doc.data(),
			  id: doc.id,
			}));
			// console.log(filteredData.reverse())
			// console.log(filteredEdu)
			setStore({...store, work_experience: filteredData.reverse(), education_info: filteredEdu.reverse(), tech_stacks: filteredStacks.reverse(), works: filteredWorks.reverse()})

			setLoading(false)
		  } catch (error) {
			console.log(error);
		  }
		};
		getWorkExperience();
	}, []);

	// useEffect(() => {
	// 	const getWorks = async () => {
	// 	  try {
	// 		const data = await getDocs(collectionQuery(db, "works"));
	// 		const filteredData = data.docs.map((doc) => ({
	// 		  ...doc.data(),
	// 		  id: doc.id,
	// 		}));
	// 		// console.log(filteredData.reverse())
	// 		setStore({...store, works: filteredData.reverse()})
	// 	  } catch (error) {
	// 		console.log(error);
	// 	  }
	// 	};
	// 	getWorks();
	// }, []);


	return <AppContext.Provider value={{
		loading: loading,
		socialLinks: store.socialLinks,
		workExperience: store.work_experience,
		education_info: store.education_info,
		tech_stacks: store.tech_stacks,
		works: store.works,
	}}>
		{children}
	</AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext)

export { AppContext, AppProvider }