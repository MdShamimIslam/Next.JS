import wait from '@/lib/wait';


export default async function QuizPage() {
    await wait(1000);
    return (
        <div className="text-xl p-4 border border-gray-200 rounded h-[360px] flex items-center justify-center">
            QUIZ OF PARALLEL
        </div>
    );
}


