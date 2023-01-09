<script setup lang="ts"></script>

<template>
  <div class="p-5">
    <div class="flex items-center justify-between">
        <el-popover width="60%" placement="bottom-start" popper-style="padding:0;">
            <!-- <template></template> -->
            <div>
                <div class="text-xl pt-5 pl-5 hover-text">全部视频</div>
                <div class="h-96 py-5 pl-5">
                    <el-scrollbar>
                        <div class="text-xs gap-5 grid grid-flow-row grid-cols-5"></div>
                    </el-scrollbar>
                </div>
            </div>
        </el-popover>
        <div class=""></div>
    </div>
    <div class="grid"></div>
  </div>
</template>
