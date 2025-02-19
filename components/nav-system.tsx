"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ChevronRight } from "lucide-react";

// Sample navigation data with images
const navigationData = {
  Academics: {
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
    items: {
      "Graduate Schools": {
        image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a",
        items: [
          {
            name: "Harvard Business School",
            image:
              "https://images.unsplash.com/photo-1568992687947-868a62a9f521",
          },
          {
            name: "Harvard Law School",
            image:
              "https://images.unsplash.com/photo-1589391886645-d51941baf7fb",
          },
          {
            name: "Harvard Medical School",
            image:
              "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
          },
          {
            name: "Harvard Kennedy School",
            image:
              "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
          },
        ],
      },
      Undergraduate: {
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
        items: [
          {
            name: "Harvard College",
            image:
              "https://images.unsplash.com/photo-1592280771190-3e2e4d571952",
          },
          {
            name: "Admissions",
            image:
              "https://images.unsplash.com/photo-1606761568499-6d2451b23c66",
          },
          {
            name: "Financial Aid",
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c",
          },
          {
            name: "Student Life",
            image:
              "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b",
          },
        ],
      },
      Research: {
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
        items: [
          {
            name: "Research Centers",
            image:
              "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5",
          },
          {
            name: "Libraries & Collections",
            image:
              "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
          },
          {
            name: "Innovation & Enterprise",
            image:
              "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e",
          },
        ],
      },
    },
  },
  Campus: {
    image: "https://images.unsplash.com/photo-1574758746264-6c85fb23f89f",
    items: {
      Libraries: {
        image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
        items: [
          {
            name: "Widener Library",
            image:
              "https://images.unsplash.com/photo-1521587760476-6c12a4b040da",
          },
          {
            name: "Cabot Science Library",
            image:
              "https://images.unsplash.com/photo-1521587765099-8835e7201186",
          },
          {
            name: "Harvard Law Library",
            image:
              "https://images.unsplash.com/photo-1568667256549-094345857637",
          },
          {
            name: "Baker Library",
            image:
              "https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
          },
        ],
      },
      Museums: {
        image: "https://images.unsplash.com/photo-1544938679-24e28c04074c",
        items: [
          {
            name: "Harvard Art Museums",
            image:
              "https://images.unsplash.com/photo-1566054757965-8c4085344c96",
          },
          {
            name: "Museum of Natural History",
            image:
              "https://images.unsplash.com/photo-1574958269340-fa927503f3dd",
          },
          {
            name: "Peabody Museum",
            image:
              "https://images.unsplash.com/photo-1626126525134-fbbc07afb32c",
          },
          {
            name: "Collection of Historical Scientific Instruments",
            image:
              "https://images.unsplash.com/photo-1583306346437-f2143c0f11fc",
          },
        ],
      },
      Athletics: {
        image: "https://images.unsplash.com/photo-1577412647305-991150c7d163",
        items: [
          {
            name: "Harvard Stadium",
            image:
              "https://images.unsplash.com/photo-1571353652572-0da0aebd1f02",
          },
          {
            name: "Blodgett Pool",
            image:
              "https://images.unsplash.com/photo-1571902943202-507ec2618e8f",
          },
          {
            name: "Bright-Landry Hockey Center",
            image:
              "https://images.unsplash.com/photo-1580748141549-71748dbe0bdc",
          },
          {
            name: "Lavietes Pavilion",
            image:
              "https://images.unsplash.com/photo-1504450758481-7338eba7524a",
          },
        ],
      },
    },
  },
  "Student Life": {
    image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b",
    items: {
      Housing: {
        image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5",
        items: [
          {
            name: "First-Year Housing",
            image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5",
          },
          {
            name: "Upper-Class Houses",
            image:
              "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
          },
          {
            name: "Graduate Housing",
            image:
              "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
          },
          {
            name: "Off-Campus Living",
            image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
          },
        ],
      },
      Activities: {
        image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b",
        items: [
          {
            name: "Student Organizations",
            image:
              "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
          },
          {
            name: "Arts & Culture",
            image: "https://images.unsplash.com/photo-1545987796-200677ee1011",
          },
          {
            name: "Sports & Recreation",
            image:
              "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
          },
          {
            name: "Community Service",
            image:
              "https://images.unsplash.com/photo-1593113598332-cd288d649433",
          },
        ],
      },
      Support: {
        image: "https://images.unsplash.com/photo-1552581234-26160f608093",
        items: [
          {
            name: "Academic Advising",
            image: "https://images.unsplash.com/photo-1552581234-26160f608093",
          },
          {
            name: "Health Services",
            image:
              "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
          },
          {
            name: "Career Services",
            image:
              "https://images.unsplash.com/photo-1521791136064-7986c2920216",
          },
          {
            name: "Counseling",
            image:
              "https://images.unsplash.com/photo-1573497620053-ea5300f94f21",
          },
        ],
      },
    },
  },
};

export function NavSystem() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [activeMain, setActiveMain] = React.useState<string | null>(null);
  const [activeSub, setActiveSub] = React.useState<string | null>(null);
  const [activeDetail, setActiveDetail] = React.useState<string | null>(null);
  const [backgroundImage, setBackgroundImage] = React.useState("");
  
  // const [filteredData, setFilteredData] = React.useState(navigationData);
  type Item = {
    name: string;
    image: string;
  };

  type SubData = {
    image: string;
    items: Item[];
  };

  type MainData = {
    image: string;
    items: Record<string, SubData>;
  };

  type NavigationData = Record<string, MainData>;

  const [filteredData, setFilteredData] = React.useState<NavigationData>(navigationData);


  // Handle search
  React.useEffect(() => {
    if (!searchQuery) {
      setFilteredData(navigationData);
      return;
    }
    

    

  
    const filtered: Record<string, MainData> = {};
  
    Object.entries(navigationData).forEach(([main, mainData]) => {
      if (main.toLowerCase().includes(searchQuery.toLowerCase())) {
        filtered[main] = mainData;
      } else {
        const filteredItems: Record<string, SubData> = {};
        Object.entries(mainData.items).forEach(([sub, subData]) => {
          if (
            sub.toLowerCase().includes(searchQuery.toLowerCase()) ||
            subData.items.some(item =>
              item.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
          ) {
            filteredItems[sub] = subData;
          }
        });
        if (Object.keys(filteredItems).length > 0) {
          filtered[main] = { ...mainData, items: filteredItems };
        }
      }
    });
  
    setFilteredData(filtered);
  }, [searchQuery]);
  
    // Update background image



    React.useEffect(() => {
      if (activeDetail) {
        setBackgroundImage(
          filteredData[activeMain!].items[activeSub!].items.find(
            (item) => item.name === activeDetail
          )?.image ?? ''
        );
      } else if (activeSub) {
        setBackgroundImage(filteredData[activeMain!].items[activeSub].image);
      } else if (activeMain) {
        setBackgroundImage(filteredData[activeMain].image);
      } else {
        setBackgroundImage('');
      }
    }, [activeMain, activeSub, activeDetail, filteredData]);
    


  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <motion.div
        className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        animate={{ opacity: backgroundImage ? 0.3 : 0 }}
        transition={{ duration: 1 }}
      />
      <div className="relative z-10">
        {/* Header */}
        <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <img
              src="https://www.harvard.edu/wp-content/themes/core/assets/img/theme/branding/harvard-logo-white.png"
              alt="Harvard Logo"
              className="h-8"
            />
            <div className="relative w-64">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/10 rounded-full px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-crimson-500"
              />
              {searchQuery ? (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <X className="w-4 h-4 text-white/60" />
                </button>
              ) : (
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" />
              )}
            </div>
          </div>
        </header>

        {/* Navigation System */}
        <div className="pt-16 flex">
          {/* Main Navigation */}
          <nav className="w-64 h-[calc(100vh-4rem)] fixed overflow-y-auto">
            <ul className="py-4">
              {Object.entries(filteredData).map(([main, data]) => (
                <li key={main}>
                  <button
                    onClick={() => {
                      setActiveMain(activeMain === main ? null : main);
                      setActiveSub(null);
                      setActiveDetail(null);
                    }}
                    className="w-full px-6 py-3 text-left hover:text-crimson-500 transition-colors relative group"
                  >
                    <span
                      className={`relative ${
                        activeMain === main ? "text-crimson-500" : ""
                      }`}
                    >
                      {main}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-crimson-500 transition-all group-hover:w-full"></span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Animated line */}
          <motion.div
            className="fixed left-64 top-16 w-px h-0 bg-white/20"
            initial={{ height: 0 }}
            animate={{ height: "calc(100vh - 4rem)" }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          {/* Sub Navigation */}
          <div className="ml-64 w-64 h-[calc(100vh-4rem)] fixed overflow-y-auto">
            <AnimatePresence mode="wait">
              {activeMain && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="p-4"
                >
                  <ul>
                    {Object.entries(filteredData[activeMain].items).map(
                      ([sub, data], index) => (
                        <motion.li
                          key={sub}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <button
                            onClick={() => {
                              setActiveSub(activeSub === sub ? null : sub);
                              setActiveDetail(null);
                            }}
                            className="w-full px-4 py-2 text-left hover:text-crimson-500 transition-colors flex items-center group"
                          >
                            <ChevronRight
                              className={`w-4 h-4 mr-2 transition-transform ${
                                activeSub === sub ? "rotate-90" : ""
                              }`}
                            />
                            <span
                              className={`relative ${
                                activeSub === sub ? "text-crimson-500" : ""
                              }`}
                            >
                              {sub}
                              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-crimson-500 transition-all group-hover:w-full"></span>
                            </span>
                          </button>
                        </motion.li>
                      )
                    )}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Content Area */}
          <main className="ml-[32rem] flex-1 min-h-[calc(100vh-4rem)]">
            <AnimatePresence mode="wait">
              {activeMain && activeSub && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="p-8"
                >
                  <h1 className="text-3xl font-serif mb-6">{activeSub}</h1>
                  <ul className="grid grid-cols-2 gap-4">
                    {filteredData[activeMain].items[activeSub].items.map(
                      (item: { name: string; image: string }, index: number) => (
                        <motion.li
                          key={item.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <button
                            onClick={() =>
                              setActiveDetail(
                                activeDetail === item.name ? null : item.name
                              )
                            }
                            className="w-full p-4 text-left rounded hover:bg-white/5 transition-colors group"
                          >
                            <span
                              className={`relative ${
                                activeDetail === item.name
                                  ? "text-crimson-500"
                                  : ""
                              }`}
                            >
                              {item.name}
                              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-crimson-500 transition-all group-hover:w-full"></span>
                            </span>
                          </button>
                        </motion.li>
                      )
                    )}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  );
}
