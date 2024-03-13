import React from 'react';
import { Skeleton as S } from '@/components/ui/skeleton';


const PostExcerptSkeleton = () => {
  return (
    <div>
      <div className="p-4 flex space-x-2 border-t">
        <div>
          <S className="h-10 w-10 rounded-full" />
        </div>
        <div className="space-y-1">
          <div className="flex items-center">
            <S className="w-[350px] h-[20px]" />
          </div>
          <S className="w-[350px] h-[80px]" />
          <div className="flex space-x-2">
            <S className="w-[50px] h-[10px]" />
            <S className="w-[50px] h-[10px]" />
          </div>
        </div>
      </div>

      <div className="p-4 flex space-x-2 border-t">
        <div>
          <S className="h-10 w-10 rounded-full" />
        </div>
        <div className="space-y-1">
          <div className="flex items-center">
            <S className="w-[350px] h-[20px]" />
          </div>
          <S className="w-[350px] h-[50px]" />
          <div className="flex space-x-2">
            <S className="w-[50px] h-[10px]" />
            <S className="w-[50px] h-[10px]" />
          </div>
        </div>
      </div>

      <div className="p-4 flex space-x-2 border-t">
        <div>
          <S className="h-10 w-10 rounded-full" />
        </div>
        <div className="space-y-1">
          <div className="flex items-center">
            <S className="w-[350px] h-[20px]" />
          </div>
          <S className="w-[350px] h-[30px]" />
          <div className="flex space-x-2">
            <S className="w-[50px] h-[10px]" />
            <S className="w-[50px] h-[10px]" />
          </div>
        </div>
      </div>

      <div className="p-4 flex space-x-2 border-t">
        <div>
          <S className="h-10 w-10 rounded-full" />
        </div>
        <div className="space-y-1">
          <div className="flex items-center">
            <S className="w-[350px] h-[20px]" />
          </div>
          <S className="w-[350px] h-[150px]" />
          <div className="flex space-x-2">
            <S className="w-[50px] h-[10px]" />
            <S className="w-[50px] h-[10px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostExcerptSkeleton;
