<template>
  <div>
    <div
      class="w-full shadow-xl rounded-md p-4 bg-white items-center border-l-4 border-transparent"
    >
      <div class="grid grid-cols-12">
        <div class="col-span-6">
          <div class="flex">
            <div
              class="flex-col flex mx-4 w-24 h-24 items-center justify-center rounded-full bg-gray-400 rounded-full animate-pulse"
            ></div>
            <div class="flex-col mx-4">
              <div>
                <div class="flex flex-row">
                  <h2
                    class="mb-4 bg-gray-400 animate-pulse w-24 h-4 rounded-md"
                  />
                </div>
                <div class="flex flex-row">
                  <h2
                    class="mb-4 bg-gray-400 animate-pulse w-48 h-4 rounded-md"
                  />
                </div>
                <div class="flex flex-row grid grid-cols-3 gap-4">
                  <div>
                    <h2
                      class="mb-4 bg-gray-400 animate-pulse w-full h-4 rounded-md"
                    />
                  </div>
                  <div>
                    <h2
                      class="mb-4 bg-gray-400 animate-pulse w-full h-4 rounded-md"
                    />
                  </div>
                  <div>
                    <h2
                      class="mb-4 bg-gray-400 animate-pulse w-full h-4 rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-6">
          <div class="flex-col h-full w-full">
            <div
              class="flex flex-row h-full grid grid-cols-3 gap-4 items-center"
            >
              <div>
                <h2
                  class="mb-4 bg-gray-400 animate-pulse w-full h-4 rounded-md"
                />
              </div>
              <div>
                <h2
                  class="mb-4 bg-gray-400 animate-pulse w-full h-4 rounded-md"
                />
              </div>
              <div>
                <h2
                  class="mb-4 bg-gray-400 animate-pulse w-full h-4 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JobListSkeleton",
};
</script>
