import * as React from "react";
import { useState, useEffect } from "react";
import useFetch from "use-http";
import { SimpleGrid, Box, useMediaQuery } from "@chakra-ui/react";
import { PageSlideFade } from "../../../Components/pate-transitions";
import RepositoryCard from "../../../Components/live-data-card";
import StackGrid from "react-stack-grid";
import CardSkeleton from "../../../Components/card-skeleton";

const LiveData = () => {
    const { get } = useFetch("https://api.github.com");
    const [repos, setRepos] = useState([]);
    const [isDone, setIsDone] = useState(true);
    const [isLargerThan720] = useMediaQuery("(min-width: 720px)");
    const [isLargerThan982] = useMediaQuery("(min-width: 982px)");

    let columnWidth:any = 390;
    if (isLargerThan982) {
        columnWidth = 390;
    } else {
        if (isLargerThan720) {
            columnWidth = 300;
        } else {
            columnWidth = '100%';
        }
    }

    useEffect( () => {
        const fetchData = async () => {
            await get("/users/ahmetkutay/repos").then(res => {
                setRepos(
                    res?.sort((a:any, b:any) => b.stargazers_count - a.stargazers_count).slice(0, 8)
                );
            });
        }

        fetchData().catch((err) => {console.log(err);})
        setTimeout(() => {
            setIsDone(false)
        },3000);
    }, []);

    return (
        <PageSlideFade>
            {isDone ? (
                <SimpleGrid columns={[1, 1, 2]} spacing={4} mt={4}>
                    <CardSkeleton />
                </SimpleGrid>
            ) : (
                <Box mt={4}>
                    <StackGrid columnWidth={columnWidth}>
                        {
                            repos?.map((repo:any, index) => (
                            <RepositoryCard
                                title={repo.name}
                                description={repo.description}
                                language={repo.language}
                                url={repo.svn_url}
                                stargazers_count={repo.stargazers_count}
                                forks_count={repo.forks_count}
                            />
                        ))}
                    </StackGrid>
                </Box>
            )}
        </PageSlideFade>
    );
};

export default LiveData;
